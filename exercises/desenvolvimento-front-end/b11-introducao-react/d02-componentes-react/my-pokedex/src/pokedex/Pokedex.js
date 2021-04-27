import React from "react";
import data from "../data";
import Pokemon from "../pokemon/Pokemon";

class Pokedex extends React.Component{
    render() {
        return (
            <div className="poke-container">
                {data.map((pokemon) => <Pokemon name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} />)};
            </div>
        );
    }
}

export default Pokedex;