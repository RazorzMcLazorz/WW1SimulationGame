import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './footer';

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
            <input id="loadcode"></input>
            <button onClick={() => this.gameCodeLoad()}>
                <Link to="/new">
                  grab info
                </Link>
            </button>
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