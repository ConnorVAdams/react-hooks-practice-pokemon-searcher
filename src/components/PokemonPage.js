import { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  const handleSearch = ({ target: { value } }) => {
    setSearchQuery(value)
  }

  const handleAddPoke = (newPoke) => {
    setPokemon(currentPokes => [...currentPokes, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPoke={handleAddPoke}/>
      <br />
      <Search onSearch={handleSearch} searchQuery={searchQuery} />
      <br />
      <PokemonCollection searchQuery={searchQuery} pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
