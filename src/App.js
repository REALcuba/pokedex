import React from "react";
import BestPokemon from "./components/BestPokemon/BestPokemon"
import PokemonAtrapado from "./components/PokemonAtrapado/PokemonAtrapado";
import './App.css';
import Logo from "./Logo/Logo";






function App() {
  const logWhenClicked = () => {
    console.log("Probando event handler")
  }
  return (
    <div className="App">
      <Logo logFunction={logWhenClicked} appName="Pokedex" />
      <PokemonAtrapado />
      <BestPokemon />
    </div>
  );
}

export default App;
