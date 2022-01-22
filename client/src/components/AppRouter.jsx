import {privateRouter, publicRouter} from '../routers.js';
import {Routes, Route} from 'react-router-dom';
import {Context} from '../index.js';
import {useContext} from 'react';


const AppRouter = function(){
const {user} = useContext(Context);
console.log(user)
	return(
		<Routes>
			{privateRouter.map(({path, Element}) => 
				<Route key={path} path={path} element={<Element/>} exact/>
				)}

			{publicRouter.map(({path, Element}) => 
				<Route key={path} path={path} element={<Element/>} exact/>
				)}
		</Routes>
		)
}

export default AppRouter
