const {BasketDevice, Basket, Device} = require('../models/shopModel.js');

class BasketController{
	async addDevice (req, res){
		try{
			let {userId, deviceId} = req.body;
			let {id} = await Basket.findOne({where: {userId}})
			let basketDevice = await  BasketDevice.create({basketId: id, deviceId});
			console.log(basketDevice)
			res.send('device add!')
		}catch(e){
			console.log(e)
		}
	}
	async getDevice(req, res){
		try{
			let {userId} = req.body;
			let {id} = await Basket.findOne({where:{userId}})
			console.log(1, id)
			let basketDevice = await BasketDevice.findAll({where:{basketId: id}})
			console.log(2, basketDevice)
			let devices = [];
			for(let elem of basketDevice){
			let device = await Device.findOne({where: {id: elem.deviceId}})
			devices.push(device);
			}
			console.log(devices)
			res.json(devices);

		}catch(e){
			console.log(e)
		}
	}
	async deleteDevice(req, res){
		try{
			let {deviceId} = req.body;
			let {id} = await BasketDevice.destroy({where:{deviceId}})
			res.json('delete');
		}catch(e){
			console.log(e)
		}
	}
}

module.exports = new BasketController()
