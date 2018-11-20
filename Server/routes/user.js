const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/register', authController.isAuth, authController.isRoot ,userController.register);
router.post('/login', userController.login);
router.post('/logout', authController.isAuth, userController.logout);

router.put('/forgot', authController.isAuth, userController.changePasswd);

router.get('/users', authController.isAuth, authController.isAdmin, userController.users);
router.get('/me', authController.isAuth, userController.user);

router.delete('/delete', authController.isAuth, authController.isRoot, userController.delUser);

module.exports = router;