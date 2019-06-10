const axios = require('axios');

module.exports = {
  /**
   * Verificamos se o usuário está
   * autenticado a usar as rotas
   * se comunicando com um serviço
   */
  async isAuthenticate(jwt) {
    const { data } = await axios.get('http://user:3001/authenticate', {}, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    return data
  }
}
