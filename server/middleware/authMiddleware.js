const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
	if(res.method === 'OPTIONS'){
		next()
	}
	try{
		const token = req.headers.authorization.split(" ")[1];
		if(!token){
			return res.status(401).json({message: 'no login'})
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		console.log(decoded)
		req.user = decoded

		next()
	}catch(e){
		res.status(401).json({message: 'dont login'})
	}
}