import {ADD_POKEMON, REMOVE_POKEMON, INIT_POKEMON} from './action';

const initialState = {
    pokemon: null,
    mypokemon: [],
    idMyPokemon: 1,
}

const reducer = (state=initialState, action) => {
    let tempPokemon = null;
    let tempMyPokemon = null;
    let indexArr = null;

    switch (action.type) {
        case ADD_POKEMON:
            console.log(action.payload);
            // Increment owned value
            console.log(state.pokemon);
            tempPokemon = state.pokemon;
            console.log(typeof tempPokemon[0].id);
            console.log(typeof action.payload.id);
            indexArr = tempPokemon.findIndex(arr => {
              return arr.id===parseInt(action.payload.id)
            });
            tempPokemon[indexArr].owned++;
        
            // Add pokemon to my pokemon list
            const myNewPokemon = [...state.mypokemon, {
                id: state.idMyPokemon,
                img: state.pokemon[action.payload.id-1].img,
                nickname: action.payload.nickname,
                idPokemon: state.pokemon[action.payload.id-1].id
              }];
            
            return {
                ...state,
                pokemon: tempPokemon,
                mypokemon: myNewPokemon,
                idMyPokemon: state.idMyPokemon+1
            }
        case REMOVE_POKEMON:
            // Delete my pokemon from list
            tempMyPokemon = state.mypokemon;
            const pokemonDeleted = tempMyPokemon.filter(arr => {
              return arr.id===parseInt(action.payload.idMyPokemon)
            });
            const newPokemons = tempMyPokemon.filter(eachPokemon => {
              return eachPokemon.id!==parseInt(action.payload.idMyPokemon)
            });

            // Decrement owned value in pokemon home
            console.log(pokemonDeleted);
            tempPokemon = state.pokemon;
            indexArr = tempPokemon.findIndex(arr => {
              return arr.id===parseInt(pokemonDeleted[0].idPokemon);
            });
            tempPokemon[indexArr].owned--;
            // setPokemon(temp);
            return {
                ...state,
                pokemon: tempPokemon,
                mypokemon: newPokemons
            }
        case INIT_POKEMON:
            return {
                ...state,
                pokemon: action.pokemons
            }
        default:
            return state;
    }
}

export default reducer;