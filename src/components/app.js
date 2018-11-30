import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>{this.props.testValue}</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}

App = connect(mapStateToProps, actions)(App);

export default App;