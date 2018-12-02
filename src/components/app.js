import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Welcome to Mr. Harrison's</h2>
        <h1>WW1 Simulation Game</h1>
            <div>
                New Game
            </div>
            <div>
                Load Game
            </div>
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