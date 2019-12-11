import React from 'react'
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'react-bootstrap';

const MyPokemonEach = ({pokemon, remove}) => {

    const divStyle = {
        padding: '10px',
        textAlign: 'left',
        maxWidth: '350px',
        margin: '0 auto'
    }

    return (
    <div className="PokemonDetail" style={divStyle}>
        <div style={{textAlign: 'center'}}>
            <img src={pokemon.img} style={{height: '150px'}} alt="" />
        </div>
        <center>Nickname: <b>{pokemon.nickname}</b></center>
        <div style={{textAlign: 'center'}}>
            <Button style={{margin: '15px'}} variant="danger" onClick={() => remove(pokemon.id)}>REMOVE!</Button>
        </div>
    </div>
)}

MyPokemonEach.propTypes = {
    pokemon: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
}

export default MyPokemonEach;

