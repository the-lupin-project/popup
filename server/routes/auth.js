const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

// full path would '/auth/login
router.post('/login', userController.verifyUser, cookieController.setCookie, sessionController.createSession,
  (req, res) => res.status(200).json(res.locals.user));

router.post('/signup', userController.createUser, cookieController.setCookie, sessionController.createSession,
  (req, res) => res.status(200).json(res.locals.user));

router.post('/updateRole', sessionController.isLoggedIn, userController.updateRole,
  (req, res) => res.status(200).json(res.locals.role));

module.exports = router;
