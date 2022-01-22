import {$authHost, $host} from "./index";

export const fetchingDevices = async (device) => {
    const {data} = await $host.get('device/getall/', device)
    return data
}

export const fetchingTypes = async (types) => {
    const {data} = await $host.get('type/', types)
    return data
}

export const fetchingBrands = async (brands) => {
    const {data} = await $host.get('brand/', brands)
    return data
}

export const createDevices = async (device) => {
    const {data} = await $host.post('device/', device)
    return data
}

export const createTypes = async (name) => {
    const {data} = await $host.post('type/', {name})
    return data
}

export const createBrands = async (name) => {
    const {data} = await $host.post('brand/', {name})
    return data
}


export const addDevice = async (userId, deviceId) => {
    const {data} = await $host.post('basket/', {userId, deviceId})
    return data
}

export const getDevice = async (userId) => {
    const {data} = await $host.post('basket/add', {userId})
    return data
}

export const deleteDevice = async (deviceId) => {
    const {data} = await $host.post('basket/delete', {deviceId})
    return data
}
