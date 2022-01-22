import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, password) => {
    const {data} = await $host.post('auth/registration', {name, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (name, password) => {
    const {data} = await $host.post('auth/login', {name, password})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('auth/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
