import React from 'react'
import PokemonListEach from './PokemonListEach';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';

const PokemonList = (props) => {
    let page = <Spinner />;
    if (props.listPokemon) {
        page = (
            <div className="PokemonList" style={{display: 'flex', flexWrap: 'wrap'}}>
                {props.listPokemon.map((item, key) => <PokemonListEach pokemon={item} key={key} /> )}
            </div>
        );
    }
    return page;
}

const mapStateToProps = state => {
    return {
        listPokemon: state.pokemon
    }
}

export default connect(mapStateToProps)(PokemonList);
