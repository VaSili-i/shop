import React, {useContext} from 'react';
import {Row} from 'react-bootstrap';
import DeviceItem from './DeviceItem.jsx';
import {Context} from '../index.js';
import {observer} from 'mobx-react-lite'
import decode from 'jwt-decode'

const DeviceList = observer(function(){
	const {shop} = useContext(Context)
	const token = localStorage.getItem('token');
	const user = decode(token)
	return(
	<Row>
		{shop.devicies.map(device => 
		<DeviceItem key={device.id} id={user.id} device={device}/>
		)}
	</Row>
	)
})

export default DeviceList