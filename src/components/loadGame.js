import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './footer';
import { Link } from 'react-router-dom';

class LoadGame extends Component {

    gameCodeLoad() {
        let code = `${document.getElementById('loadcode').value}`;
        console.log(`code entered: ${code}`);
        code = code.split('');
        console.log(`whats in the array: ${code}`);
        console.log(`length of array is: ${code.length}`);
    }

  render() {
    return (
      <div className='loadGame'>
        <div>
          Enter code given when you saved the game
          <div>
            <input id="loadcode"></input>
            <button onClick={() => this.gameCodeLoad()}>
                <Link to="/game">
                  grab info
                </Link>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
LoadGame = connect(mapStateToProps, actions)(LoadGame);
export default LoadGame;