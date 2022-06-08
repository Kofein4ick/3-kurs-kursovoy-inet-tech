import React, { useState, useContext,useEffect } from 'react'
import { Button, Container} from 'react-bootstrap'
import { Context } from '..'
import CreateBrand from '../components/modals/CreateBrand'
import CreateCar from '../components/modals/CreateCar'
import CreateType from '../components/modals/CreateType'
import { fetchBrands, fetchTypes } from '../http/carAPI'


const AdminPage=()=>{
    const [brandVisible,setBrandVisible]=useState(false)
    const [typeVisible,setTypeVisible]=useState(false)
    const [carVisible,setCarVisible]=useState(false)
    const {car}=useContext(Context)
    const check=()=>{
        if(car._type.length===0)
        {
          alert('Список типов пуст!Для добавления автомобиля, добавьте сначала тип')
          setCarVisible(false)
          return null
        }
        if(car._brand.length===0)
        {
          alert('Список марок пуст!Для добавления автомобиля, добавьте сначала марку')
          setCarVisible(false)
          return null
        }
        setCarVisible(true)
    }
    useEffect(() => {
        fetchTypes().then(data => car.setType(data))
        fetchBrands().then(data => car.setBrand(data))
    })
    return(
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark" } 
                className="mt-4 p-2"
                onClick={()=>setTypeVisible(true)}
                >
                Добавить тип
            </Button>
            <Button 
                variant={"outline-dark" } 
                className="mt-4 p-2"
                onClick={()=>setBrandVisible(true)}
                >
                Добавить марку
            </Button>
            <Button 
                variant={"outline-dark" } 
                className="mt-4 p-2"
                onClick={check}
                >
                Добавить автомобиль
                </Button>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateCar show={carVisible} onHide={()=> setCarVisible(false)}/>
        </Container>
 )
}
export default AdminPage