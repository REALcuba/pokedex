import React from "react";

const Logo = ({ appName, LogFunction }) => {
    return (
        <div>
            <h1>Welcome to the {appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
                alt="Pidgey"
                onClick={LogFunction} />
        </div>
    )
}
export default Logo;