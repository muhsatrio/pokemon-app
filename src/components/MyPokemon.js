import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MyPokemonEach from './MyPokemonEach';

const MyPokemon = ({pokemons, remove}) => {

    return (
    <div className="MyPokemon" style={{display: 'flex', flexWrap: 'wrap'}}>
        {pokemons.length > 0 ? 
            pokemons.map((item, key) => <MyPokemonEach pokemon={item} remove={remove} key={key} /> ) 
         : (
            <h3>Your Pokemon still empty, go catch them!</h3>
        )}
        {}
    </div>
    )
}

MyPokemon.propTypes = {
    pokemons : PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};

export default MyPokemon;
