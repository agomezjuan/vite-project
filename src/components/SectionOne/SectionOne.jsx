import React, { useState } from 'react'
import './SectionOne.sass'
import Card from '../Card'

const SectionOne = () => {

    const [ocultar, setOcultar] = useState(false)

    const [usuario, setUsuario] = useState({
        nombre: 'Juan',
        apellido: 'Perez'
    })

    const estadoDos = {
        nombre: 'Alberto',
        apellido: 'Gomez'
    }

    const articulos = [
        {
            "img": "http://unsplash.it/300/200/",
            "title": "Cancion 1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            "img": "http://unsplash.it/300/200/",
            "title": "Card Two",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            "img": "http://unsplash.it/300/200/",
            "title": "Card Three",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
    ]

    const [articulo1, articulo2, articulo3] = articulos

    console.log(articulo1);

    const changeUser = () => {
        setUsuario(estadoDos)
    }

    return (
        <div className='section_one'>
            <button onClick={() => setOcultar(!ocultar)}>Click</button>
            <button onClick={changeUser}>Cambiar Usuario</button>
            <h1>Section One</h1>
            {ocultar && (
                <div div className='tarjetas'>
                    {articulos.map((articulo, index) => {
                        return <Card key={index} img={articulo.img} title={articulo.title} description={articulo.description} />
                    })}
                </div>)
            }

            <h1>{usuario.nombre} {usuario.apellido}</h1>
        </div >
    )
}

export default SectionOne
