import React, {useEffect, useState } from 'react'
import { Col, Container,Image, Row,Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneCar,deleteCar } from '../http/carAPI'
import UpdateCar from '../components/modals/UpdateCar'

const CarPage=()=>{
   const [car,setCar]=useState({info:[]})
   const [carVisible,setCarVisible]=useState(false)
   const {id}= useParams()
   const history = useHistory()
    useEffect(()=>{
       fetchOneCar(id).then(data=>setCar(data))
    })
    const delCar = () => {
        deleteCar(id).then(alert('Удаление успешно'))
        history.push('/')
    }

    return(
        <Container className="mt-3">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={'http://localhost:5000/'+car.picture} />
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{car.name}</h2>
                </Row>
            </Col>
            <Col md={4}>
                 <h3>{car.price} руб.</h3>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <Row >Двигатель:{car.engine} </Row>
                <Row> Привод:{car.wd}</Row>
                <Row> Цвет:{car.color}</Row>
            </Row>
                <Button className={"p-1"}  variant="outline-danger"  onClick={delCar}>Удалить</Button>
                <Button className={"p-1"} variant={"outline-dark" } onClick={()=>setCarVisible(true)}>Изменить</Button>
                <UpdateCar show={carVisible} id={id} onHide={()=> setCarVisible(false)}/>
        </Container>
 )
}
export default CarPage