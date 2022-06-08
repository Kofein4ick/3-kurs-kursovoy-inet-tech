import React, { useContext } from 'react'
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import { Card, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
    const {car} = useContext(Context)
    let brand=[]
    brand=car._brand.slice().sort((a, b) => a.name > b.name ? 1 : -1)
    return(
        <Row className="d-flex">
            {brand.map(brand=>
                <Card
                style={{cursor:'pointer'}}
                key={brand._id}
                className="p-3"
                onClick={()=> car.setselectedBrand(brand)}
                border={brand._id === car._selectedBrand._id?'danger':'light'}
                >
                   {brand.name}
                </Card>
                )}
        </Row>
    
    )
            })

export default BrandBar