import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import { Link } from 'react-router-dom';

class Game extends Component {

  render() {
    return (
      <div>
        <div>
          
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Game = connect(mapStateToProps, actions)(Game);
export default Game;