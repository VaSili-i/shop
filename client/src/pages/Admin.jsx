import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap'
import ModalBrandAndType from '../components/modals/CreateBrandAndType.jsx';
import ModalDevice from '../components/modals/CreateDevice.jsx';


const Admin = function(){
	  const [show, setShow] = useState(false);
	  const [isType, setIsType] = useState(true);

	  const chackAndShowModal = function(e){
	  	if(e.target.name == 'type'){
	  		setIsType(true)
	  	}else{
	  		setIsType(false)
	  	}
	  	setShow(true)
	  }

	  const [deviceShow, setDeviceShow] = useState(false);
	return(
		<Container className='d-flex flex-column'>
			<Button name="type" onClick={(e) => {chackAndShowModal(e)}}
			 variant={'outline-dark'} className='mt-2'>Добавть тип</Button>
			<Button onClick={(e) => {chackAndShowModal(e)}}
			variant={'outline-dark'} className='mt-2'>Добавить бренд</Button>
			<Button onClick={() => {setDeviceShow(true)}}
			variant={'outline-dark'} className='mt-2'>Добавить устройство</Button>
			
			<ModalBrandAndType isType={isType} show={show} handleClose={() => setShow(false)}/>
			<ModalDevice show={deviceShow} handleClose={() => setDeviceShow(false)}/>
			
		</Container>
		)
}

export default Admin