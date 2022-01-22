import React, {useContext, useEffect, useState} from 'react';
import {Col, Card, Image, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTER} from '../utils/consts.js';
import {addDevice} from '../http/shopAPI.js';
import {deleteDevice} from '../http/shopAPI.js';
import {observer} from 'mobx-react-lite'
import {Context} from '../index.js';
 
const BasketItem = observer(function ({device}){
	
	return(
		<Col md={3} className='m-3'>
			<Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
				<Image width={150} height={150} src={'http://localhost:6002/' + device.img}/>
					<div className='mt-1 d-flex justify-content-between align-items-center'>
						<div>{device.price}p</div>
						<div className="d-flex align-items-center">
							<div> {device.rating}</div>
							<Image width={20} heigh={20}/>
						</div>
					</div>
					<div>{device.name}</div>
					<Button onClick={()=> deleteDevice(device.id)}>delete</Button>
			</Card>
		</Col>
		)
})

export default BasketItem