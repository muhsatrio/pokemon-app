import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import NavbarPage from './components/NavbarPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemon from './components/MyPokemon';

// const store = createStore();

function App() {
  const [pokemons, setPokemon] = useState([{
    id: 1,
    name: "dummy",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    move: "lorem ipsum sit amer dolor",
    type: "lorem ipsum sit amer dolor"
  }]);

  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/my-pokemon">
            <MyPokemon />
          </Route>
          <Route path="/pokemon">
            <PokemonDetail pokemon={pokemons[0]} />
          </Route>
        </Switch>
      </Router>
        {/* <Provider store={store}> */}
          {/* <Counter /> */}
        {/* </Provider> */}
    </div>
  );
}

export default App;
