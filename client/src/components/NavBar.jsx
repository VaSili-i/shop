import React, {useContext} from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTER, SHOP_ROUTER, REGISTRATION_ROUTER, ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER,} from '../utils/consts.js';
import {Context} from '../index.js';
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom';


const NavBar = observer(function(){
	const navigate = useNavigate()
	const {user} = useContext(Context);
	console.log(user.isAuth)
	return(
		  <Navbar bg="dark" variant="dark">
		    <Container>
		      <NavLink to={SHOP_ROUTER} exact>SHOP_ROUTER</NavLink>
		      {user.isAuth ?
		    <Nav className="ml-auto">
		      <Button onClick={() => user.setIsAuth(false)}>Out user</Button>
		      <Button onClick={() =>{ navigate(ADMIN_ROUTER)}} className='btnNavBar'>admin panell</Button>
		    </Nav>
		      :
		    <Nav className="ml-auto">
		      <Button  onClick={() => user.setIsAuth(true)}>Login</Button>
		      <Button onClick={() =>{ navigate(LOGIN_ROUTER)}} className='btnNavBar'>Registration</Button>
		    </Nav>
		}
		    </Container>
		  </Navbar>
		)
})

export default NavBar