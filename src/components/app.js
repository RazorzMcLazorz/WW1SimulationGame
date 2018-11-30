import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Welcome to Mr. Harrison's</h2>
        <h1>WW1 Simulation Game</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}

App = connect(mapStateToProps, actions)(App);

export default App;