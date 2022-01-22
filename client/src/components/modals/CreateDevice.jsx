import React, {useState, useContext, useEffect} from 'react'; 
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import {Context} from '../../index.js';
import {observer} from 'mobx-react-lite'
import {fetchingDevices, fetchingTypes, fetchingBrands, createDevices} from '../../http/shopAPI.js';


const ModalDevice = observer(function({show, handleClose}){
  const {shop} = useContext(Context);
	const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [img, setImg] = useState(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState([])


  function saveFile(e){
    setImg(e.target.files[0])
    console.log(img)
  }


  useEffect(() => {
    fetchingDevices().then(data => shop.setDevicies(data))
    fetchingTypes().then(data => shop.setTypes(data))
    fetchingBrands().then(data => shop.setBrands(data))
  }, [])

  function makeInfo(){
    setInfo([...info, {title: '', name: ''}])
  }
  function deleteInfo(name){
    setInfo(info.filter(info => info.name != name))
  }

  function changeInfo(numbers, name, title){
    if(name){
    setInfo(info.map((i, ind) => ind !== numbers ? i : {...i, name}))
  }else{
    setInfo(info.map((i, ind) => ind !== numbers ? i : {...i, title}))
  }
}
  function addDevice(){
    const formData = new FormData()
    formData.append('name', content)
    formData.append('price', `${price}`)
    formData.append('brandId', brand)
    formData.append('typeId', type)
    formData.append('img', img)
    createDevices(formData).then(data => handleClose())
  }

	return(
      <Modal className="d-flex"
      show={show} onHide={handleClose} animation={true}>
        <Modal.Header >
          <Modal.Title>Создание device</Modal.Title>
        </Modal.Header>
        <input  value={content} className="m-2"
        placeholder=">Введите название device"
        onChange={(e) => {setContent(e.target.value)}} type='text'/>
        <Modal.Footer>
          <Form className="d-flex">
            <Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label
                  className="me-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  visuallyHidden
                >
                  Preference
                </Form.Label>
                <Form.Select onClick={(e) => {setBrand(e.target.value)}}
                className="me-sm-2 mb-2" id="inlineFormCustomSelect">
                <option value="">select brand</option>
                {shop.brands.map(brand =>

                  <option value={brand.id}>{brand.name}</option>
                  )}
                </Form.Select>

                     <Form.Select onClick={(e) => {setType(e.target.value)}} 
                     className="me-sm-2" id="inlineFormCustomSelect">
                       <option value="">select type</option>
                {shop.types.map(type => 
                  <option value={type.id}>{type.name}</option>
                  )}
                </Form.Select>
                <input className="m-2" type='file' onChange={(e) => {saveFile(e)}}/>
                <input  value={price} className="m-2"
                 placeholder=">price"
                  onChange={(e) => {setPrice(e.target.value)}} type='text'/>
                <div>
                <Button className="m-2" onClick={()=> {makeInfo()}}>make info</Button>
                 
                {info.map((info, index) => 
                  <div key={index}>
                  <input onChange={(e) =>{changeInfo(index, e.target.value)}}
                   placeholder="name" type="text" value={info.name}/>
                  <input onChange={(e) =>{changeInfo(index, null, e.target.value)}} 
                  className="m-1" placeholder="content" type="text" value={info.title}/>
                  <input type="button" onClick={() => {deleteInfo(info.name)}} value='delete'/>
                  </div>
                  )}
                </div>
                <div className="justify-content-center">
         <Button className="m-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {addDevice()}}>
            Save Changes
          </Button>
          </div>
              </Col>

            </Row>
          </Form>
        </Modal.Footer>
      </Modal>
		)
})

export default ModalDevice