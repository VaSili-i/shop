import React, {useState} from 'react'; 
import {Modal, Button} from 'react-bootstrap';
import {createTypes, createBrands} from '../../http/shopAPI.js';

const ModalBrandAndType = function({isType, show, handleClose,}){
	const [type, setType] = useState('')
	const [brand, setBrand] = useState('')

		function changeInput(e){
			if(isType){
				setType(e.target.value)
			}else{
				setBrand(e.target.value)
			}
		}

    function create(){
      if(isType){
        createTypes(type)
        setType('')
      }else{
        createBrands(brand)
        setBrand('')
      }
      handleClose()
    }

	return(
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header >
          <Modal.Title>{isType ? 'Создание типа' : 'Создание бранд'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Введите название {isType ? 'типа' : 'бранд'}</Modal.Body>
        <input style={{margin: 5}} placeholder={isType ? 'Type name' : 'Brand name'} 
        type="text" value={isType ? type : brand} onChange={(e) => {changeInput(e)}}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={create}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
		)
}

export default ModalBrandAndType