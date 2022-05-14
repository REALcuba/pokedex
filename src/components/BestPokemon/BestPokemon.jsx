import React from "react"


const BestPokemon = (props) => {

    return <div>
        <ul>
            {props.habilidades.map((habilidad, index) => {
                return <li key={index}>{habilidad}

                </li>
            })}
        </ul>
        <h2>Likes para Pidgey : {props.likes}</h2>
    </div>

}

export default BestPokemon