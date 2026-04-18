import React, { useEffect, useState } from 'react'

const PersonajesStarWars = () => {
    const [loadingPersonajes, setLoadingPersonajes] = useState(false)
    const [personajes, setPersonajes] = useState(null)
    async function traerpersonajes() {
        setLoadingPersonajes(true)
        const result = await fetch(
            'https://swapi.dev/api/people',
            {
                method: "GET" //Indico al servidor que quiero traer informacion
            }
        )
        const body = await result.json()
        setPersonajes(body.results)
        setLoadingPersonajes(false)
    }
    useEffect(
        () => {
            traerpersonajes()
        },
        []
    )

    return (
        <div>

            {
                loadingPersonajes && <span>Cargando...</span>
            }
            {
                personajes && !loadingPersonajes && personajes.map(
                    (personaje) => {
                        return <div
                            key={personaje.height}>
                            <h2>Usuario: {personaje.name}</h2>
                            <h3>Genero: {personaje.gender}</h3>
                            <span>Mundo: {personaje.homeworld}</span>
                            <hr />
                        </div>
                    }
                )
            }
        </div>
    )
}

export default PersonajesStarWars