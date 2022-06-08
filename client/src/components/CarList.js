import React, { useContext } from 'react'
import {observer} from "mobx-react-lite"
import { Row } from 'react-bootstrap'
import {Context} from "../index"
import DeviceItem from "./DeviceItem"

const CarList = observer(({sortf}) => {
    const {car} = useContext(Context)
    let carn=[]
    if(!sortf){
        carn=car._car.slice().sort((a, b) => a.name > b.name ? 1 : -1)
    }
    else{   
        carn=car._car.slice().sort((a, b) => a.name < b.name ? 1 : -1)
    }
    return(
        <Row className="d-flex">
            {carn.map(car=>
                <DeviceItem key={car._id} car={car}/>
            )}
        </Row>
    )
})

export default CarList