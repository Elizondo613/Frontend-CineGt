import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from "react-router-dom";

export default function PeliNueva () {

  const formRef = useRef(null)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    let tmpMovie = {
      name: event.target.inputNombre.value,
      description: event.target.inputDescripcion.value,
      imagen: event.target.inputImagen.value
    }
    
    newUserAPI(tmpMovie)

    formRef.current.reset()
  }

  const newUserAPI = (movie) => {

    fetch("http://localhost:3001/api/movies", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('/peliculas')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1>Película nueva</h1>
      {
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <Form.Group className="mb-3 col-6" controlId="inputNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Descripcion..." />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="inputImagen">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control type="text" placeholder="Imagen url..." />
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