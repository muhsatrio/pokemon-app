import React from 'react'
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'react-bootstrap';

const PokemonDetail = ({pokemon}) => {

    const divStyle = {
        padding: '10px',
        textAlign: 'left',
        maxWidth: '350px',
        margin: '0 auto'
    }

    return (
    <div className="PokemonDetail" style={divStyle}>
        <div style={{textAlign: 'center'}}>
            <img src={pokemon.img} style={{height: '200px'}} alt="" />
        </div>
        <Row>
            <Col xs="2"><b>Name: </b> </Col>
            <Col xs="10">{pokemon.name}</Col>
        </Row>
        <Row>
            <Col xs="2"><b>Moves: </b></Col>
            <Col xs="10">{pokemon.move}</Col>
        </Row>
        <Row>
            <Col xs="2"><b>Types: </b></Col>
            <Col xs="10">{pokemon.type}</Col>
        </Row>
        <div style={{textAlign: 'center'}}>
            <Button style={{margin: '15px'}} variant="success">CATCH!</Button>
        </div>
    </div>
)}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}

export default PokemonDetail;

