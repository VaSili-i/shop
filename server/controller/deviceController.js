const {Device} = require('../models/shopModel');
const uuid = require('uuid')
const path = require('path')

class DeviceController{
	async create(req, res){
		try{
			const {name, price, info, typeId, brandId} = req.body;
			const {img} = req.files;
			let fileName = uuid.v4() + 'jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const device = await Device.create({name, typeId, brandId, price, img: fileName});
			res.json(device)
		}catch(e){
			console.log(e)
		}
}
	async getAll(req, res){
		try{
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let devicies;
			if(!brandId && !typeId){
				 devicies = await Device.findAll({});
			}

			if(!brandId && typeId){
				devicies = await Device.findAndCountAll({where: {typeId}, limit, offset});
			}

			if(brandId && !typeId){
			 	devicies = await Device.findAndCountAll({where: {brandId}, limit, offset});
			}

			if(brandId && typeId){
				 devicies = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
}
			return res.send(devicies)
		}catch(e){
			console.log(e)
		}
}
	async getOne(req, res){
		try{
			const {id} = req.params;
			const dataDevice = await Device.findByPk(id);
			return res.send(dataDevice)
		}catch(e){
			console.log(e)
		}
	}

}
	module.exports = new DeviceController();













