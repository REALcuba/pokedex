const BestPokemon = () => {
    const habilidades = ['Anticipation', 'Adaptability', 'Run-Away']
    return <div>
        <ul>
            {habilidades.map((habilidad, index) => {
                return <li key={index}>{habilidad}

                </li>
            })}
        </ul>
    </div>

}

export default BestPokemon