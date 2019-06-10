const SessionService = require('../services/SessionService');

class SessionController {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async signIn(req, res) {
    try {
      const result = await SessionService.signIn(req);
      
      if (result.wrongCredentials) return res
        .status(401)
        .json(result)
      
      return res
        .status(200)
        .json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ error });
    }
  }

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async signUp(req, res) {
    try {
      const result = await SessionService.signUp(req);

      return res
        .status(200)
        .json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ error });
    }
  }
}

module.exports = new SessionController();
