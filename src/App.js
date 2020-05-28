import React, {useEffect} from 'react';
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
import {connect} from 'react-redux';
import {fetchPokemon} from './store/action';

function App(props) {

  useEffect(() => {
    props.onInitPokemon();
  }, [props])

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
          <Route path={"/pokemon/:id"}>
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPokemon: () => dispatch(fetchPokemon())
  }
}

export default connect(null, mapDispatchToProps)(App);