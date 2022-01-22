import React, {useEffect, useContext, useState} from 'react';
import {getDevice} from '../http/shopAPI.js';
import {observer} from 'mobx-react-lite';
import {Context} from '../index.js';
import decode from 'jwt-decode';
import {Row} from 'react-bootstrap'
import BasketItem from '../components/BasketItem.jsx';
 
const Basket = observer(function(){


	const {shop} = useContext(Context);
	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = decode(token);
		getDevice(user.id).then(res => shop.setBasket(res))
		}, [])


	return (
	<Row>
		{shop.basket.length > 0 ? shop.basket.map(device => 
		<BasketItem key={device.id} device={device}/>
		)
		:
		<h1 style={{alignText: 'center'}}> Basket is helfe</h1>
		}
	</Row>
		)
})

export default Basket