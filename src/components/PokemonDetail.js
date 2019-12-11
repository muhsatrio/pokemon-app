import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const PokemonDetail = ({pokemons, addPokemon}) => {

    const [catched, setCatched] = useState(false);
    const [nickname, setNickname] = useState();

    let { id } = useParams();
    let i = 0;
    while (pokemons[i].id!=id) {
        i = i+1;
    }

    // const [idPokemon, setId] = useState(id);

    const divStyle = {
        padding: '10px',
        textAlign: 'left',
        maxWidth: '350px',
        margin: '0 auto'
    }

    const catchPokemon = (idPokemon) => {
        console.log(idPokemon);
        const probabilityCatched = Math.random();
        console.log(probabilityCatched);
        if (probabilityCatched>=0.5) {
          console.log('Catched!');
          setCatched(true);
        }
        else {
          alert('You are not succesfull catch it, try again!');
          console.log('Not catched :(');
        }
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addPokemon(id, nickname);
        alert(`Your pokemon ${nickname} is on deck!`);
        setCatched(false);
    }
    let moves = "", types = "";
    pokemons[i].move.map((item, key) => {
        if (key<pokemons[i].move.length - 1) {
            moves+=`${item.move.name}, `;
        }
        else {
            moves+=`${item.move.name}.`
        }
    });

    pokemons[i].type.map((item, key) => {
        if (key<pokemons[i].move.length - 1) {
            types+=`${item.type.name}, `;
        }
        else {
            types+=`${item.type.name}.`
        }
    });

    return (
    <div className="PokemonDetail" style={divStyle}>
        {catched ? (
            <div className="catchedPokemon">
                <center><h3>You catched it!</h3></center>
                <img src={pokemons[i].img} style={{height: '300px'}} alt="" />
                <center>Let's give nickname to your pokemon!</center>
                <form onSubmit={handleSubmit}>
                    <Form.Control name="nickname" style={{margin: '15px'}} type="text" placeholder="your pokemon nickname" onChange={e => setNickname(e.target.value)} />
                    <div style={{textAlign: 'center'}}>
                        <Button type="submit" variant="primary">Submit</Button>    
                    </div>
                </form>
            </div>
        ) : (
            <div className="detailPokemon">
                <h1>Pokemon Detail</h1>
                <div style={{textAlign: 'center'}}>
                    <img src={pokemons[i].img} style={{height: '200px'}} alt="" />
                </div>
                <Row>
                    <Col xs="2"><b>Name: </b> </Col>
                    <Col xs="10">{pokemons[i].name}</Col>
                </Row>
                <Row>
                    <Col xs="2"><b>Moves: </b></Col>
                    <Col xs="10">{moves}</Col>
                </Row>
                <Row>
                    <Col xs="2"><b>Types: </b></Col>
                    <Col xs="10">{types}</Col>
                </Row>
                <div style={{textAlign: 'center'}}>
                    <Button style={{margin: '15px'}} variant="success" onClick={() => catchPokemon(id)}>CATCH!</Button>
                </div>
            </div>
        )}
        
    </div>
)}

PokemonDetail.propTypes = {
    pokemons: PropTypes.array.isRequired,
    addPokemon: PropTypes.func.isRequired
}

export default PokemonDetail;

