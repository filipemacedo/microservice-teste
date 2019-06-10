const jwt = require('jsonwebtoken');

class AuthenticationService {
  /**
   * Destruturamos o header do objeto 
   * passado por parametro
   * 
   * @param {*} headers 
   */
  async isAuthenticate({ headers }) {
    // obtemos o token do header
    const [ prefix, token ] = headers.authorization.split(' ');

    try {
      // verificamos o jwt enviado pelo header
      // Também podemos adicionar mais uma camada, verificando se o jwt
      // enviado é o mesmo que está no registro do usuário.
      const decoded = await jwt.verify(token, process.env.APP_SECRET);

      return { 
        isAuthenticate: true, 
        ...decoded 
      };
    } catch (error) {
      return { isAuthenticate: false };
    }
  }
}

module.exports = new AuthenticationService();
