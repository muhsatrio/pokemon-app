import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPage from './components/NavbarPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemon from './components/MyPokemon';
import axios from 'axios';
import Spinner from './components/Spinner';

function App() {
  const [initialized, setInitialized] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [idMyPokemon, setIdMyPokemon] = useState(1);
  const [mypokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let temp = [];
      for (let i=1;i<=16;i++) {
        const result = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
        temp.push({
          id: i,
          name: result.data.name,
          img: result.data.sprites.front_default,
          move: result.data.moves,
          type: result.data.types,
          owned: 0
        })
      }
      setPokemon(temp);
      setInitialized(true);
    }
    fetchData();
  }, []);

  const addPokemon = (idPokemon, nickname) => {
    console.log(pokemon);
    let temp = pokemon;
    temp[idPokemon-1].owned++;
    setPokemon(temp);
    const myNewPokemon = {
      id: idMyPokemon,
      img: pokemon[idPokemon-1].img,
      nickname: nickname,
      idPokemon: pokemon[idPokemon-1].id
    };
    setIdMyPokemon(idMyPokemon+1);
    setMyPokemon([...mypokemon, myNewPokemon]);
  }

  const removePokemon = (idMyPokemon) => {
    console.log(idMyPokemon);
    console.log('Remove');
    let i = 0;
    while (mypokemon[i].id!=idMyPokemon) {
      i++;
    }

    const idPokemon = mypokemon[i].idPokemon;
    let temp = [...pokemon];
    temp[idPokemon-1].owned = temp[idPokemon-1].owned -1;
    setPokemon(temp);
    
    temp = [...mypokemon];
    temp.splice(i, 1);
    setMyPokemon(temp);

    // temp[i].owned = temp.owned - 1;
    // setPokemon(temp);
  }

  return (
    <div className="App">
      {initialized ? (
        <Router>
        <NavbarPage />
        <Switch>
          <Route exact path="/">
            <PokemonList pokemons={pokemon} />
          </Route>
          <Route path="/my-pokemon">
            <MyPokemon pokemons={mypokemon} remove={removePokemon}  />
          </Route>
          <Route path={"/pokemon/:id"}>
            <PokemonDetail pokemons={pokemon} addPokemon={addPokemon} />
          </Route>
        </Switch>
      </Router>
      ) : <Spinner />}
    </div>
    
  );
}

export default App;
