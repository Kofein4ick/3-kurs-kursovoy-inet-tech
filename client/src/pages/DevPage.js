import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DevPage=()=>{
    return(
        <Container className="mt-3">
            <Row>
            <Col md={4}>
                <Row>
                    <h2>Назначение и разработчик сия детища</h2>
                </Row>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <Row >Разработчик: Простой работяга из группы 310б, звать Андреем </Row>
                <Row> Назначение: Выполнение задания курсовой работы</Row>
                <Row> Цель: Пощупать и опробовать создание fullstack приложения</Row>
            </Row>
        </Container>
 )
}
export default DevPage