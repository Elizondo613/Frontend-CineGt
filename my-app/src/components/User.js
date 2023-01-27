import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function User() {
  return (
    <div>
    <Navbar bg="dark" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to={"/"}>Cine GT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to={"/peliculas"}>Películas</Nav.Link>
            <Nav.Link as={Link} to={"/reservacion"}>Mis reservaciones</Nav.Link>
            <NavDropdown title="Cuenta" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/perfil"}>Mi perfil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/logout"}>
                Salir
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  )
}
