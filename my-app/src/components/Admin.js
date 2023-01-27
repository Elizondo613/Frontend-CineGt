import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function BasicExample() {
  return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Cine GT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/peliNueva"}>Películas</Nav.Link>
                    <Nav.Link as={Link} to={"/cuentas"}>Cuentas</Nav.Link>
                    <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/logout"}>
                        Salir
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
  );
}

export default BasicExample;
