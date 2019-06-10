const AuthenticationService = require('../services/AuthenticationService');

class AuthenticateController {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async isAuthenticate(req, res) {
    try {
      let status = 200;

      const verifyJWT = await AuthenticationService.isAuthenticate(req);

      if (!verifyJWT.isAuthenticate) status = 401;
      
      return res
        .status(status)
        .json(verifyJWT);
    } catch (error) {
      return res
        .status(500)
        .json({ error });
    }
  }
}

module.exports = new AuthenticateController();
