import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../shared/API_URL';

export default function Movies() {
  const [movie, setMovie] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
        const config = {
      headers:{
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }
    }

    fetch(`${API_URL}/movies`, config)
    .then(res => res.json())
    .then(data=>{
      setMovie(data)
    })

  },[])

const IrReservacion = (pelicula) => {
  console.log(pelicula)
  //navigate("/reservacion");
}

  return (
    <>
    <div className='row'>
      {
        movie.map((item, index) => (
          <div className="col-md-4"  >
          <Card className='mt-2' key={index} style={{ width: '350px' }}>
          <Card.Img variant="top" src={item.imagen}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary" onClick={IrReservacion(item)}>Reservar</Button>
          </Card.Body>
        </Card>
        </div>
        ))
        
      }
      </div>
    </>
  )
}
