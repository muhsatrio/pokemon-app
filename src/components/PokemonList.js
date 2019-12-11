import React from 'react'
import PropTypes from 'prop-types';
import PokemonListEach from './PokemonListEach'

const PokemonList = ({pokemons}) => (
    <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
        {pokemons.map((item, key) => <PokemonListEach pokemon={item} key={key} /> )}
    </div>
)

PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default PokemonList;
