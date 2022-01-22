const typeRouter = require('./typeRouter.js');
const deviceRouter = require('./deviceRouter.js');
const brandRouter = require('./brandRouter.js');
const userRouter = require('./userRouter.js');
const basketRouter = require('./basketRouter.js');

const {Router} = require('express');
const router = new Router();

router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/brand', brandRouter)
router.use('/auth', userRouter)
router.use('/basket', basketRouter)

module.exports = router