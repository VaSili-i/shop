import React, {useContext, useState} from 'react';
import {Context} from '../index.js';
import {observer} from 'mobx-react-lite';
import {ListGroup} from 'react-bootstrap';

const TypeBar = observer(function(){
	const {shop} = useContext(Context)
	const [selectedType, setSelectedType] = useState(0);


	return(
		<ListGroup>
			{shop.types.map(type => 
				<ListGroup.Item style={{cursor: 'pointer'}}
				onClick={() => {setSelectedType(type.id)}}
				active={type.id == selectedType} key={type.id}>
				{type.name}
				</ListGroup.Item>
				)}
		</ListGroup>
		)
})

export default TypeBar