const {User, Basket} = require('../models/shopModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const generateJwt = (id, name, role) => {
	payload = {
		id,
		name, 
		role,
	}
	return jwt.sign(
	payload,
	process.env.SECRET_KEY,
	{expiresIn: '2h'}
		)
}

class UserController{
	async create(req, res){
		try{
			const {name, password, role} = req.body;
			let chackUser = await User.findOne({where:{name}});
			if(chackUser){
				return res.send('user already created')
			}
			const hasPassword = await bcrypt.hash(password, 3);
			const user = await User.create({name, password: hasPassword, role});
			const basket = await Basket.create({userId: user.id})
			let token = generateJwt(user.id, name, user.role)
			return res.json({token})
		}catch(e){
			console.log(e)
		}
}
	async login(req, res){
		try{
			const {name, password} = req.body;
			const chackUser = await User.findOne({where: {name}})
			if(!chackUser){
				return res.send('user dont fond')
			}
			const chackPassword = bcrypt.compareSync(password, chackUser.password);
			if(!chackPassword){
				return res.send('password or name dont right');
			}
			let token = generateJwt(chackUser.id, name, chackUser.role)
			console.log(chackUser)
			return res.json({token})
		}catch(e){
			console.log(e)
		}
	}
	async check(req, res, next) {
		console.log(req.user)
		const token = generateJwt(req.user.id, req.user.name, req.user.role)
		return res.json({token})
	}
}
	module.exports = new UserController();


