import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export default function Registrar () {

  const formRef = useRef(null)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpUser = {
      name: event.target.inputNombre.value,
      last_name: event.target.inputApellido.value,
      dpi: event.target.inputDpi.value,
      email: event.target.inputCorreo.value,
      phone: event.target.inputTelefono.value,
      password: event.target.inputPassword.value,
      credits: 300
    }
    
    newUserAPI(tmpUser)

    formRef.current.reset()
  }

  const newUserAPI = (user) => {

    fetch("http://localhost:3001/api/users", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate("/");
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1>registrar</h1>
      {
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputDpi">
                <Form.Label>DPI</Form.Label>
                <Form.Control type="number" placeholder="Dpi..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputCorreo">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" placeholder="Correo..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Telefono..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña..." />
              </Form.Group>
            </div>
            <div className='row justify-content-center mt-3'>
              <Button variant="primary" className='col-3' type="submit">
                Registrar
              </Button>
            </div>
          </Form>
      }
    </>

  )
}