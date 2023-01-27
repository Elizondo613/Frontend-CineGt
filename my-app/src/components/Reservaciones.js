import React, { useState } from 'react'
import "./Reservaciones.css"

export const Reservaciones = () => {

    let filas = Array(5).fill()
    let columnas = Array(10).fill()

    const [seleccionados, setSeleccionados] = useState([])
    const [bloqueados, setBloqueados] = useState(['03', '13', '23', '33', '43', '06', '16', '26', '36', '46'])

    const toggleSeleccionado = (id, activo) => {
        if (activo) {
            setSeleccionados(seleccionados.filter((item) => item !== id))
        } else {
            setSeleccionados([...seleccionados, id])
        }
    }

    const getEstadoButaca = (index1, index2) => {
        let id = `${index1}${index2}`

        let esSeleccionado = seleccionados.some((item) => id === item)

        if (esSeleccionado) {
            return (
                <div className='butaca mt-2 text-center seleccionado' onClick={() => toggleSeleccionado(id, true)}>
                    {index1} {index2}
                </div>
            )
        } else {
            let esBloqueado = bloqueados.some((item) => id === item)
            if (esBloqueado) {
                return (
                    <div className='butaca mt-2 text-center bloqueado'>
                        {index1} {index2}
                    </div>
                )
            } else {
                return (
                    <div className='butaca mt-2 text-center disponible' onClick={() => toggleSeleccionado(id, false)}>
                        {index1} {index2}
                    </div>
                )
            }
        }
    }

    const reservar = () => {
        
    }

    return (
        <>
                <div className='botones'>
                <h5>Horarios: </h5>
                <button className='boton'>9:00</button>
                <button className='boton'>16:00</button>
                <button className='boton'>21:00</button>
                </div>
            {
                filas.map((item, index1) => (
                    <div key={index1} className='d-flex justify-content-center gap-2'>
                        {
                            columnas.map((item2, index2) => (
                                <div key={index2}>
                                    {
                                        getEstadoButaca(index1, index2)
                                    }
                                </div>
                                
                            ))
                        }
                    </div>
                ))
            }
            <button className='btn btn-primary mt-5' onClick={reservar}>
                Reservar
            </button>
        </>
    )
}

export default Reservaciones;