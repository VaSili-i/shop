import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Row, Card} from 'react-bootstrap';
import {Context} from '../index.js';


const BrandBar = observer(function(){
	const {shop} = useContext(Context)
	const [selectedBrand, setSelectedBrand] = useState(0);
	return(
			<Row className='d-flex'>
				{shop.brands.map(brand =>
					<Card key={brand.id}
					onClick={() => {setSelectedBrand(brand.id)}}
					border={brand.id == selectedBrand ? 'danger' : 'light'}
					className='p-3'>
					{brand.name}
					</Card>
					)}
			</Row>
		)
})

export default BrandBar