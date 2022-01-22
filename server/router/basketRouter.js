const {Router} = require('express');
const basketController = require('../controller/basketController.js');

const basketRouter = new Router();

basketRouter.post('/', basketController.addDevice);
basketRouter.post('/add', basketController.getDevice);
basketRouter.post('/delete', basketController.deleteDevice);

module.exports = basketRouter; 