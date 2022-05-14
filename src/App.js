import React, { useState } from "react";
import BestPokemon from "./components/BestPokemon/BestPokemon"
import PokemonAtrapado from "./components/PokemonAtrapado/PokemonAtrapado";
import './App.css';
import Logo from "./components/Logo/Logo";
import Button from "./components/Button/Button";






function App() {
  const habilidades = ['Anticipation', 'Adaptability', 'Run-Away']
  const [likes, setLikes] = useState(0);
  function like() {
    setLikes(prevLikes => likes + 1)
    console.log("likes");
  }
  const logWhenClicked = () => {
    console.log("Probando event handler");
  }

  return (
    <div className="App">
      <Logo logFunction={logWhenClicked} appName="Pokedex" />
      <PokemonAtrapado />
      <BestPokemon habilidades={habilidades} likes={likes} />
      <Button like={like} />

    </div>
  );
}

export default App;
