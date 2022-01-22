import {LOGIN_ROUTER, SHOP_ROUTER, REGISTRATION_ROUTER, ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER} from './utils/consts.js';
import Auth from './pages/Auth.jsx';
import Shop from './pages/Shop.jsx';
import Admin from './pages/Admin.jsx';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage'

export const privateRouter = [
	{path: ADMIN_ROUTER, Element: Admin},
	{path: BASKET_ROUTER, Element: Basket}
];


export const publicRouter = [
	{path: LOGIN_ROUTER, Element: Auth},
	{path: SHOP_ROUTER, Element: Shop},
	{path: REGISTRATION_ROUTER, Element: Auth},
	{path: DEVICE_ROUTER + '/:id', Element: DevicePage},
];