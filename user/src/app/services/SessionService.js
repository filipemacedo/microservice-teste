const { User } = require('../models');

class SessionService {
  /**
   * Destruturamos o body
   * do objeto passado por parametro
   * @param {*} body 
   */
  async signUp({ body }) {
    // criamos o usuário de acordo com os dados passados
    const user = await User.create(body);

    return { 
      token: user.generateToken(), 
      id: user.id 
    };
  }

  /**
   * Destruturamos o body
   * do objeto passado por parametro
   * @param {*} body 
   */
  async signIn({ body }) {
    // destruturamos o email e a senha do body
    const { email, password } = body;

    // buscamos o usuário de acordo
    // com o email passado
    const user = await User
      .findOne({ 
        where: { email } 
      });
    
    // caso não exista nenhum, o acesso é invalidado
    if (!user) return { 
      wrongCredentials: true 
    };

    // caso exista, verificamos se a senha bate
    const passwordIsValid = await user.checkPassword(password);
    
    
    return (passwordIsValid)
      ? { 
          token: user.generateToken(), 
          wrongCredentials: false 
        }
      : { 
          wrongCredentials: true 
        };
  }
}

module.exports = new SessionService()
