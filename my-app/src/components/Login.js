import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const formRef = useRef(null)
  const navigate = useNavigate();

  let admin = {
    nombre: 'Bryan',
    password: 'admin123',
    rol: 'admin'
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpUser = {
      name: event.target.inputNombre.value,
      password: event.target.inputPassword.value
    }
    
    LoginUserAPI(tmpUser)

    if(admin.rol==='admin'){
      navigate('/peliNueva')
    }

    formRef.current.reset()
  }

  const LoginUserAPI = (user) => {
    fetch("http://localhost:3001/api/users/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('usuario', JSON.stringify(data));
        navigate('/peliculas')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    {
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div className='row'>
          <Form.Group className="mb-3 col-6" controlId="inputNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre..." />
          </Form.Group>
          <Form.Group className="mb-3 col-6" controlId="inputPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña..." />
          </Form.Group>
        </div>
        <div className='row justify-content-center mt-3'>
          <Button variant="primary" className='col-3' type="submit">
            Entrar
          </Button>
        </div>
      </Form>
  }
  </>
  )
}


