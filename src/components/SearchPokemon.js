import React, {  useState } from "react";
import { getAllPokemons } from "../api";
import "../colors.css"

function Search() {

    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const getKayboardValue = (e) => {
        setSearch(e.target.value)
        // console.log(search)
        
    }

    const clickTheButton = () => {
        searchData(search)
        
        document.querySelector(".containerSinglePokemon").style.display = "block";
        // console.log("Pokemon: ", search)
    }    

    const searchData = async (pokemons) => {
        const data = await getAllPokemons(pokemons)
        setPokemon(data)
        console.log(data.name, data);
    }

    return(
        <div className="containerSearchPokemon">
            <input className="inputSearch" onChange={getKayboardValue} placeholder="Buscar Pokemon"></input>
            <button className="btnSearch" onClick={clickTheButton}>Buscar</button>
            <div className="containerSinglePokemon">
                {pokemon ? (
                    <div className="singlePokemon">
                        <h3>{pokemon.name}</h3>
                        <img alt="imgPokemon" src={pokemon.sprites.front_default}></img>
                        <div>{pokemon.types.map((type) => <p className={type.type.name}>{type.type.name}</p>)}</div>
                    </div>                   
                ) : null}
            </div>
        </div>

    )
}

export default Search;
