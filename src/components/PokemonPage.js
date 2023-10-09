import { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  const handleSearch = (searchQuery) => {
    const regEx = new RegExp(searchQuery, 'i')
    const newPokemon = pokemon.filter(poke => regEx.test(poke.name.toLowerCase()))
    setPokemon(newPokemon)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
