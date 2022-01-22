import React from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';

const DevicePage = function(){
	const device = {id: 1, name: 'ipien', price: 24, rating: 5, img: 3}
	return(
		<Container>
			<Col md={4}>
				<Image width={300} heigh={300} border={'solid'} />
			</Col>
			<Col md={4}>
				<Row>
					<h2>{device.name}</h2>
					<div
					className='d-flex align-items-center justify-content-center'
					>
					{device.rating}
					</div>
				</Row>
			</Col>
			<Col md={4}>

			</Col>

		</Container>
		)
}

export default DevicePage