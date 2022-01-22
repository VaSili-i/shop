const {Router} = require('express');
const deviceRouter = new Router()
const deviceController = require('../controller/deviceController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js')

	deviceRouter.get('/getall', deviceController.getAll)
	deviceRouter.post('/',/*, checkRole('ADMIN'),*/ deviceController.create)
	deviceRouter.get('/get/:id', deviceController.getOne)

	module.exports = deviceRouter;