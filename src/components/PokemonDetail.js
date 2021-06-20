import React, {useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Spinner from './Spinner';
import {connect} from 'react-redux';
import {addPokemon} from '../store/action';

const PokemonDetail = (props) => {

    let { id } = useParams();

    const [catched, setCatched] = useState(false);
    const [nickname, setNickname] = useState();

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
        if (probabilityCatched>=0.30) {
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
        if (nickname === '' || nickname === undefined) {
            alert('Name should not be empty!');
        }
        else {
            props.funcAddPokemon(id, nickname);
            alert(`Your pokemon ${nickname} is on deck!`);
            setCatched(false);
        }
    }

    let page = <Spinner />;

    if (props.pokemons) {
        let i = 0;
        while (props.pokemons[i].id!==parseInt(id)) {
            i = i+1;
        }

        let moves = "", types = "";

        props.pokemons[i].move.forEach((item, key) => {
            if (key<props.pokemons[i].move.length - 1) {
                moves+=`${item.move.name}, `;
            }
            else {
                moves+=`${item.move.name}.`
            }
        });

        props.pokemons[i].type.forEach((item, key) => {
            if (key<props.pokemons[i].move.length - 1) {
                types+=`${item.type.name}, `;
            }
            else {
                types+=`${item.type.name}.`
            }
        });

        page = (
            <div className="PokemonDetail" style={divStyle}>
            {catched ? (
                <div className="catchedPokemon">
                    <div>
                        <center><h3>You catched it!</h3></center>
                        <img src={props.pokemons[i].img} style={{height: '300px'}} alt="" />
                        <center>Then, give nickname to your pokemon!</center>
                        <form onSubmit={handleSubmit}>
                            <Form.Control name="nickname" style={{margin: '15px'}} type="text" placeholder="your pokemon nickname" onChange={e => setNickname(e.target.value)} />
                            <div style={{textAlign: 'center'}}>
                                <Button type="submit" variant="primary">Submit</Button>    
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="detailPokemon">
                    <h1>Pokemon Detail</h1>
                    <div style={{textAlign: 'center'}}>
                        <img src={props.pokemons[i].img} style={{height: '200px'}} alt="" />
                    </div>
                    <Row>
                        <Col xs="2"><b>Name: </b> </Col>
                        <Col xs="10">{props.pokemons[i].name}</Col>
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
        )
    }

    return page;
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        funcAddPokemon: (id, nickname) => dispatch(addPokemon({id: id, nickname: nickname})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

