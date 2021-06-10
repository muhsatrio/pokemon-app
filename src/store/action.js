import axios from 'axios';

export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const INIT_POKEMON = 'INIT_POKEMON';
export const FETCH_POKEMON = 'FETCH_POKEMON';

export const addPokemon = (payload) => {
    return {
        type: ADD_POKEMON,
        payload
    }
}

export const removePokemon = (payload) => {
    return {
        type: REMOVE_POKEMON,
        payload
    }
}

export const initPokemon = (pokemons) => {
    return {
        type: INIT_POKEMON,
        pokemons
    }
}

export const fetchPokemon = () => {
    return async dispatch => {
        let temp = [];
        for (let i=1;i<=50;i++) {
          const result = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
          temp = [...temp, {
            id: i,
            name: result.data.name,
            img: result.data.sprites.front_default,
            move: result.data.moves,
            type: result.data.types,
            owned: 0
          }];
        }
        dispatch(initPokemon(temp));
    }
}