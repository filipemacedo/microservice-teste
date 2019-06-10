const auth = require('../services/auth');

const unauthorized = res => () => res.status(401).json({ 
  message: 'Unauthorized' 
});

module.exports = () => async (req, res, next) => {
  // destrutura o req para obter o header
  const { headers } = req

  const unauthorizedResponse = unauthorized(res);

  if (!headers.authorization) return unauthorizedResponse();

  // corta o valor para obter o jwt
  const [ prefix, jwt ] = headers.authorization.split(' ');

  // caso não exista um jwt
  // retorna que o usuário não está autorizado
  if (!jwt) return unauthorizedResponse();
  
  // verifica se o mesmo está autorizado
  // consultando o microservice
  const { isAuthenticate, ...decoded } = await auth.isAuthenticate(jwt);

  if (! isAuthenticate) return unauthorizedResponse();

  req.decoded = decoded;

  return next();
}