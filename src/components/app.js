import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './footer';
import { Link } from 'react-router-dom';

class App extends Component {

    newGame() {
        console.log('new');
    }

    loadGame() {
        console.log('load')
    }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to Mr. Harrison's</h2>
        <h1>WW1 Simulation Game</h1>
            <Link to="/" className="buttons" id="newGame" onClick={() => this.newGame()}>
                New Game
            </Link>
            <Link to="/load" className="buttons" id="loadGame" onClick={() => this.loadGame()}>
                Load Game
            </Link>
            <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;