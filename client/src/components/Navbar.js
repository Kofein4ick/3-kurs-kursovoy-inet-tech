import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    const history = useHistory()
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style = {{color:'white'}} to ='/'>Машинка</NavLink>
        <Nav className="ml-auto" style = {{color:'white'}}>
          <Button variant={"outline-light"} onClick={()=> history.push('/admin')}>Админ-панель</Button>
          <Button variant={"outline-light"} onClick={()=> history.push('/dev')}>Разработчик</Button>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar