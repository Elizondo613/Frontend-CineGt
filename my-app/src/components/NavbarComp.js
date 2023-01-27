import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registrar from './Registrar';
import Reservaciones from './Reservaciones.js';
import Movies from './Movies';
import Admin from './Admin';
import PeliNueva from './PeliNueva';
import Cuentas from './Cuentas';
import User from './User';
import Perfil from './Perfil';

function BasicExample() {
  return (
    <Router>
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
                    <NavDropdown.Item as={Link} to={"/registrar"}>Registar</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/login"}>
                        Iniciar sesión
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div>
            <Container className='instrucciones'>

            </Container>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/peliculas' element={<Movies/>}/>
                <Route path='/reservacion' element={<Reservaciones/>}/>
                <Route path='/registrar' element={<Registrar/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/peliNueva' element={<PeliNueva/>}/>
                <Route path='/cuentas' element={<Cuentas/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default BasicExample;