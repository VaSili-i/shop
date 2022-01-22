const jwt = require('jsonwebtoken')

module.exports = function (role){
	return function(req, res, next){
		if(res.method = 'OPTIONS'){
			next()
		}
		try{
			const token = req.headers.authorization.split(" ")[1];
			console.log(token)
			if(!token){
				return res.status(401).json({message: 'no login'})
			}
			const decoded = jwt.verify(token, process.env.SECRET_KEY);
			if(decoded.role !== role){
				return res.status(403).json({message: decoded.role})
			}
			req.user = decoded
			next()
		}catch(e){
			return res.status(401).json({message: 'error'})
		}
	}
}

