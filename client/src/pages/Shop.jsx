import React, {useEffect, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import TypeBar from '../components/TypeBar.jsx';
import BrandBar from '../components/BrandBar.jsx';
import DeviceList from '../components/DeviceList.jsx'
import {fetchingDevices, fetchingTypes, fetchingBrands} from '../http/shopAPI.js';
import {Context} from '../index.js';
import {observer} from 'mobx-react-lite'

const Shop = observer(function (){
	const {shop} = useContext(Context);
	useEffect(() => {
		fetchingDevices().then(data => shop.setDevicies(data))
		fetchingTypes().then(data => shop.setTypes(data))
		fetchingBrands().then(data => shop.setBrands(data))
	}, [])
console.log(shop.devicies)
	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar/>
				</Col>

				<Col md={9}>
				<BrandBar/>
				<DeviceList/>
				</Col>
			</Row>
		</Container>
		)
})

export default Shop