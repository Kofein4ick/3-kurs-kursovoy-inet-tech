import React, { useContext } from 'react'
import {observer} from "mobx-react-lite"
import { ListGroup } from 'react-bootstrap'
import {Context} from "../index"

const TypeBar = observer(() => {
    const {car} = useContext(Context)
    let type=[]
    type=car._type.slice().sort((a, b) => a.name > b.name ? 1 : -1)
    return(
        <ListGroup>
        {type.map(type =>
            <ListGroup.Item 
            style={{cursor:'pointer'}}
            onClick={() => car.setselectedType(type)}
            active={type._id===car._selectedType._id}
            key={type._id}>
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar