const {Router} = require('express');
const typeController = require('../controller/typeController.js');
const typeRouter = new Router()
const checkRole = require('../middleware/checkRoleMiddleware.js')

	typeRouter.get('/', typeController.get)
	typeRouter.post('/', /*checkRole('ADMIN'),*/ typeController.create)

	module.exports = typeRouter;