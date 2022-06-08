import React, { useState,useEffect } from 'react'
import {Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { fetchOneBrand } from '../http/carAPI'



const DeviceItem = ({car}) => {
    const history = useHistory()
    const [brand,setBrand]=useState({info:[]})
    useEffect(()=>{
        fetchOneBrand(car.brandId).then(data=>setBrand(data))
     })

    return(
        <Col md={3} className={"mt-3"} onClick={()=>history.push('/car/'+car._id)}>
            <Card style={{width:150,cursor:'pointer'}} border={"light"}>
               <Image width={150} height={150} src={'http://localhost:5000/' + car.picture} />
               <div className="d-flex justife-content-between align-items-center">
                   <div >{brand.name}</div>
               </div>
               <div>{car.name}</div>

            </Card>
        </Col>
    )
}

export default DeviceItem