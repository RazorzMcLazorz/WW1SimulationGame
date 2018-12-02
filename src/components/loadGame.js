import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './footer';

class LoadGame extends Component {

  render() {
    return (
      <div className='loadGame'>
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
LoadGame = connect(mapStateToProps, actions)(LoadGame);
export default LoadGame;