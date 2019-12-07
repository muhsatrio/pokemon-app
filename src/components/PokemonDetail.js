import React from 'react'
import PropTypes from 'prop-types';

const PokemonDetail = ({pokemon}) => {

    return (
    <div className="PokemonDetail">
        <img src={pokemon.img} style={{height: '200px'}} alt="" /><br />
        <span><b>Name</b>: {pokemon.name}</span><br />
        <span><b>Moves</b>: {pokemon.move}</span><br />
        <span><b>Types</b>: {pokemon.type}</span><br />
    </div>
)}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}

export default PokemonDetail;

