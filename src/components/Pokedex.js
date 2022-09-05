import React, { useEffect, useState } from "react";
import Card from "./PokemonCard";
import "../colors.css"

function Pokedex() {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState([])


  
  useEffect(() => {
    const pageSize = 25
    const getPokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * page}`

    const getPokemons = async () => {
      const res = await fetch(getPokemonsUrl)
      const data = await res.json()
  
      const newPokemons = []
      for(var i = 0; i < data.results.length; i++){
        const url = data.results[i].url;
        const res = await fetch(url)
        const pokemonInfo = await res.json()
        newPokemons.push(pokemonInfo)
      }
      
      setPokemons(newPokemons)
    }

    getPokemons()
    // console.log(pokemons)
  }, [page])

  const nextPage = () => {
    setPage(page => page + 1)
  }

  const previousPage = () => {
    if(page !== 0)
      setPage(page => page - 1)
  }

  return (
      <div>
        <div className="navPokedex">
          <h1>Pokedex</h1>
          <div className="pagesDisplay">
            <img onClick={previousPage} src="../images/back-to.png"  alt="back-to"></img>
            <h2>Page {page + 1}</h2>
            <img onClick={nextPage} src="../images/next-page.png"  alt="next-page"></img>
          </div>
        </div>
        <div className="pokedex-grid">
          {pokemons.map( (pokemon, index) => 
          <Card
            name={pokemon.name} 
            id={pokemon.id}
            image={pokemon.sprites.other['official-artwork'].front_default} // image={pokemon.sprites.front_default}
            type={pokemon.types.map((type) => <p className={type.type.name}>{type.type.name}</p>)}
            key={index}
            >
          </Card>
          )}
        </div>
      </div>
  );
}

export default Pokedex;
