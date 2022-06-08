import { observer } from 'mobx-react-lite'
import React,{ useContext, useEffect,useState } from 'react'
import { Col, Container, Row,Dropdown } from 'react-bootstrap'
import { Context } from '../index'
import BrandBar from '../components/BrandBar'
import CarList from '../components/CarList'
import TypeBar from '../components/TypeBar'
import { fetchBrands, fetchCars, fetchTypes } from '../http/carAPI'


const Shop = observer (()=>{
    const {car} = useContext(Context)
    const [sortf,setSort]=useState(false)
    useEffect(() => {
        fetchTypes().then(data => car.setType(data))
        fetchBrands().then(data => car.setBrand(data))
        fetchCars(car._selectedBrand._id,car._selectedType._id).then(data => car.setCar(data))
    },[car,car._selectedBrand,car._selectedType])
    return(
        <Container>
            <Row className="mt-2">
                <Col md ={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md ={9}>
                    <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle className="btn btn-secondary dropdown-toggle">{'Сортировка по названию модели'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={()=>setSort(false)}>
                              По возрастанию
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={()=>setSort(true)}>
                              По убыванию
                            </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <BrandBar></BrandBar>
                    <CarList sortf={sortf}></CarList>
                </Col>
            </Row>
        </Container>
 )
})
export default Shop