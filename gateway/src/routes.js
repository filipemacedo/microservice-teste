const router = require('express').Router();
const proxy = require('express-http-proxy');

const authMiddleware = require('./middlewares/auth');

const userProxy = proxy('http://user:3001');

router.post('/sign-in', userProxy);
router.post('/sign-up', userProxy);

router.get('/home', authMiddleware(), (req, res) => {
	return res.json({ success: true })
});

module.exports = router;
