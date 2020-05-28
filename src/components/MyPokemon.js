import React from 'react';
import PropTypes from 'prop-types';
import MyPokemonEach from './MyPokemonEach';
import {connect} from 'react-redux';
import {removePokemon} from '../store/action'

const MyPokemon = (props) => {

    return (
    <div className="MyPokemon" style={{display: 'flex', flexWrap: 'wrap'}}>
        {props.myPokemon.length > 0 ? 
            props.myPokemon.map((item, key) => <MyPokemonEach pokemon={item} remove={props.removeFunc} key={key} /> ) 
         : (
            <h3>Your Pokemon still empty, go catch them!</h3>
        )}
        {}
    </div>
    )
}

MyPokemon.propTypes = {
    myPokemon : PropTypes.array.isRequired,
    removeFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        myPokemon: state.mypokemon,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFunc: (idMyPokemon) => dispatch(removePokemon({idMyPokemon: idMyPokemon}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon);
