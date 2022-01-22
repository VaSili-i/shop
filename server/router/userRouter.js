const {Router} = require('express');
const userRouter = new Router();
const userController = require('../controller/userController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

	userRouter.post('/registration', userController.create)
	userRouter.post('/login', userController.login)
	userRouter.get('/auth', authMiddleware, userController.check)

	module.exports = userRouter
