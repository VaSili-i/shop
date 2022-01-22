const {Type} = require('../models/shopModel');

class TypeController{
	async create(req, res){
		try{
			const {name} = req.body;
			const type = await Type.create({name});
			return res.send(type)
		}catch(e){
			console.log(e)
		}
}
	async get(req, res){
		try{
			const types = await Type.findAll({});
			return res.send(types)
		}catch(e){
			console.log(e)
		}
}
}
	module.exports = new TypeController();
