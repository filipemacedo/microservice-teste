const router = require('express').Router();

const SessionController = require('./app/controllers/SessionController');
const AuthenticateController = require('./app/controllers/AuthenticateController');

/**
 * [description]
 * @param  {[type]} '/sign-in' [description]
 */
router.post('/sign-in', SessionController.signIn);

router.post('/sign-up', SessionController.signUp);

/**
 * [description]
 * @param  {[type]} '/authenticate' [description]
 */
router.get('/authenticate', AuthenticateController.isAuthenticate);

module.exports = router;
