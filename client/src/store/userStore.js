import {makeAutoObservable} from 'mobx'

class UserSrote{
	constructor(){
		this._isAuth = false;
		this._user = {}
		makeAutoObservable(this)
	}
	setIsAuth(auth){
		this._isAuth = auth
	}
	setUser(user){
		this._isAuth = user
	}
	get isAuth(){
		return this._isAuth
	}
	get isUser(){
		return this._isUser
	}
}

export default new UserSrote()