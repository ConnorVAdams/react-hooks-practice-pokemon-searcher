import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  
  const pokesToDisplay = pokemon.map(poke => {
    return <PokemonCard key={poke.id} {...poke} />
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokesToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
