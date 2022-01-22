import {makeAutoObservable} from 'mobx';

class ShopStore{
	constructor(){
		this._devicies = [
			{id: 1}
		];
		this._types = [];

		this._brands = [
		{id: 1, name: 'Samsung'},
		{id: 2, name: 'Realmy'},
		];
		this._basket = [];
		this._basketCount = 0;
		makeAutoObservable(this)
	}
	setDevicies(devicies){
		this._devicies = devicies;
	}
	setTypes(types){
		this._types = types
	}
	setBrands(brands){
		this._brands = brands
	}
	setBasket(basket){
		this._basket = basket
	}
	setBasketCount(count){
		this._basketCount = count
	}
	get basketCount(){
		return this._basketCount
	}
	get basket(){
		return this._basket
	}
	get devicies(){
		return this._devicies
	}
	get types(){
		return this._types
	}
	get brands(){
		return this._brands
	}
}

export default new ShopStore()