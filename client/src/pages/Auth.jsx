import React, {useState, useContext} from 'react';
import {Form, Button} from 'react-bootstrap'
import {NavLink, useLocation, Link} from 'react-router-dom'
import {LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER} from '../utils/consts.js';
import {registration, login} from '../http/userAPI.js';
import {observer} from 'mobx-react-lite'
import {Context} from '../index.js';
import {useNavigate} from 'react-router-dom';

const Auth = observer(function(){
	const [name, setName] = useState('dfff');
	const [password, setPassword] = useState('')
	const location = useLocation()
	const navigate = useNavigate()
	let isLogin = (LOGIN_ROUTER == location.pathname)
	const {user} = useContext(Context)

console.log(isLogin)
	async function submit(e){
			try{
		let data;
			e.preventDefault()
			if(isLogin){
				 data = await login(name, password)
			}else{
			 data = await registration(name, password)
		}
			user.setUser(data)
			user.setIsAuth(true)
			navigate(SHOP_ROUTER)
	}catch(e){
		alert(e)
	}
}

	return(
		<div className='boxAuth'>
			<Form className="formAuth">
			<h5>{isLogin? 'Login' : 'Registration'}</h5>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control value={name} 
			    onChange={(e) =>{setName(e.target.value)}} 
			    type="text" placeholder="Enter email" />
			    <Form.Text className="text-muted">
			      We'll never share your email with anyone else.
			    </Form.Text>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control value={password} 
			    onChange={(e) =>{setPassword(e.target.value)}} 
			    type="password" placeholder="Password" />
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicCheckbox">
			  </Form.Group>
			  {isLogin ?
			  <div>
			 	You dont have accaynt?
			 	<Link to='/registration' exact>Registration</Link>
			  </div>
			  :
			  <div>
			 	You have accaynt?<Link to='/login' exact> login</Link>
			  </div>
			}
			  <Button onClick={(e) => {submit(e)}}
			  className="btnForm" variant="primary" type="submit">
			    Send
			  </Button>
			</Form>
		</div>
	)
})




export default Auth