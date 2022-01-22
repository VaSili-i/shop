import React from 'react';
import {Col, Card, Image, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTER} from '../utils/consts.js';
import {addDevice} from '../http/shopAPI.js';
import {observer} from 'mobx-react-lite'
 
const DeviceItem = observer(function ({device, id}){

	const navigate = useNavigate();
	function addDevices(e){
		addDevice(id, device.id)
		e.stopPropagation()
	}
	return(
		<Col md={3} className='m-3' onClick={() => {navigate(DEVICE_ROUTER + '/' + device.id)}}>
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
					<Button onClick={(e) => {addDevices(e)}}>add</Button>
			</Card>
		</Col>
		)
})

export default DeviceItem