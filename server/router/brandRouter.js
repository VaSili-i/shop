const {Router} = require('express');
const brandRouter = new Router()
const brandController = require('../controller/brandController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js');

	brandRouter.get('/', brandController.get)
	brandRouter.post('/',/*checkRole('ADMIN'),*/ brandController.create)

	module.exports = brandRouter;