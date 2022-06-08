import {observer} from "mobx-react-lite"
import React, { useContext,useState } from 'react'
import { Button, Modal,Form, Dropdown} from 'react-bootstrap'
import { createCar} from '../../http/carAPI'
import {Context} from"../../index"


const CreateCar=observer( ({show,onHide}) => {
  const {car}=useContext(Context)
  const [value,setValue]=useState('')
  const [price,setPrice]=useState('')
  const [file,setFile]=useState(null)
  const [engine,setEngine]=useState('')
  const [wd,setWd]=useState('')
  const [color,setColor]=useState('')
  const selectFile =e=>{
    setFile(e.target.files[0])
  }
  
  const addCar = () => {
    const formData=new FormData()
    if(!value){
      alert('Введите название модели!')
      return null
    }
    formData.append('name',value) 
    if(!price){
      alert('Установите цену!')
      return null
    }  
    formData.append('price',`${price}`)
    if(!car._selectedBrand._id){
      alert('Выберите марку!')
      return null
    }
    formData.append('brandId',String(car._selectedBrand._id))
    if(!car._selectedType._id){
      alert('Укажите тип!')
      return null
    }
    formData.append('typeId',String(car._selectedType._id))
    if(!file){
      alert('Прикрепите изображение!')
      return null
    }
    formData.append('picture',file)
    if(!engine){
      alert('Укажите информацию о двигателе!')
      return null
    }
    formData.append('engine',engine)
    if(!color){
      alert('Укажите цвет!')
      return null
    }
    formData.append('color',color)
    if(!wd){
      alert('Укажите привод!')
      return null
    }
    formData.append('wd',wd)
  
    createCar(formData).then(data=>{
      setValue('')
      setPrice('')
      setFile(null)
      setEngine('')
      setWd('')
      setColor('')
      alert('Добавление успешно')
      onHide()
    })
  }

    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
       <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить автомобиль
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                  <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{car._selectedType.name ||'Выберите тип'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car._type.map(type =>
                            <Dropdown.Item
                              onClick={()=>car.setselectedType(type)}
                              key={type.id}>
                              {type.name}
                            </Dropdown.Item>
                          )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{car._selectedBrand.name ||'Выберите марку'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car._brand.map(brand =>
                            <Dropdown.Item
                              onClick={()=>car.setselectedBrand(brand)}
                              key={brand.id}>
                              {brand.name}
                            </Dropdown.Item>
                          )}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Control 
                  value={value}
                  onChange={e=>setValue(e.target.value)}
                  placeholder={"Введите название"}
                />
                <Form.Control
                  value={color}
                  onChange={e=>setColor(e.target.value)} 
                  className="mt-3"
                  placeholder={"Введите цвет"}
                />
                <Form.Control 
                  value={engine}
                  onChange={e=>setEngine(e.target.value)} 
                  className="mt-3"
                  placeholder={"Введите характеристики двигателя"}
                />
                 <Form.Control 
                  value={wd} 
                  onChange={e=>setWd(e.target.value)}
                  className="mt-3"
                  placeholder={"Введите тип привода"}
                />
                <Form.Control 
                  value={price}
                  onChange={e=>setPrice(e.target.value)} 
                  className="mt-3"
                  placeholder={"Введите стоимость"}
                  type="number"
                />
                 <Form.Control 
                  className="mt-3"
                  type="file"
                  onChange={selectFile}
                />
                <hr/>


            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addCar}>Добавить</Button>
        </Modal.Footer>
      </Modal>
 )
})
export default CreateCar