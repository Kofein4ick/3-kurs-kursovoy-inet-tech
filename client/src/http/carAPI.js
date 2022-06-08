import {$host} from "./index2"

export const createType= async (_type) => {
    const {data} =await $host.post('/api/type', _type)
    return data
}

export const fetchTypes= async () => {
    const {data} =await $host.get('/api/type')
    return data
}
export const fetchOneType= async (_id) => {
    const {data} =await $host.get('/api/type/' + _id)
    return data
}

export const createBrand= async (_brand) => {
    const {data} =await $host.post('/api/brand', _brand)
    return data
}

export const fetchBrands= async () => {
    const {data} =await $host.get('/api/brand')
    return data
}

export const fetchOneBrand= async (_id) => {
    const {data} =await $host.get('/api/brand/' + _id)
    return data
}

export const createCar= async (_car) => {
    const {data} =await $host.post('/api/car', _car)
    return data
}

export const fetchCars= async (brandid,typeid) => {
    const {data} =await $host.get('/api/car', {params:{brandid,typeid}})
    return data
}

export const deleteCar= async (_id) => {
    const {data} =await $host.delete('/api/car/' + _id)
    return data
}
export const fetchOneCar= async (_id) => {
    const {data} =await $host.get('/api/car/' + _id)
    return data
}
export const updateCar= async (_id,_car) => { 
    const {data} =await $host.put('/api/car/'+_id, _car)
    return data
}