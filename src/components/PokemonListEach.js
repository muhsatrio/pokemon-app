import React from 'react'
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PokemonListEach = ({pokemon}) => {

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
        <center><b>{pokemon.name}</b></center>
        <center>Owned: <b>{pokemon.owned}</b></center>
        <div style={{textAlign: 'center'}}>
            <Button style={{margin: '15px'}} variant="primary" as={Link} to={{pathname: `/pokemon/${pokemon.id}`}}>Detail</Button>
        </div>
    </div>
)}

PokemonListEach.propTypes = {
    pokemon: PropTypes.object.isRequired
}

export default PokemonListEach;

