const {Brand} = require('../models/shopModel');

class BrandController{
	async create(req, res){
		try{
			const {name} = req.body;
			const brand = await Brand.create({name});
			res.send(brand)
		}catch(e){
			console.log(e)
		}
}
	async get(req, res){
		try{
			const brand = await Brand.findAll({});
			return res.send(brand)
		}catch(e){
			console.log(e)
		}
}
}
	module.exports = new BrandController();
