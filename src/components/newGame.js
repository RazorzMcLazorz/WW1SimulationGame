import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import CustomizedInputs from './parts/text';
import ContainedButtons from './parts/button';
import FontAwesome from './parts/playerAddButton';
import SimpleSelect from './parts/countryInput';

class New extends Component {

  state = {
    saved: '',
    countryCounting: true,
    gameName: '',
    gameSize: null,
  }

  addPlayer(count, country) {
    
  }

  gameSetup() {
    return  (       
      <div id="newGameDetails">
        <div>
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Germany Players
            <textarea id="Germany"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Russia Players
            <textarea id="Russia"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Britain Players
            <textarea id="France"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            France Players
            <textarea id="France"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 9 ?
          <div>
            United States Players
            <textarea id="France"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Austria Players
            <textarea id="Austria"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Ottoman Players
            <textarea id="Ottoman"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Italy Players
            <textarea id="Italy"/>
            <FontAwesome/>
          </div>:''}
          {this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Serbia Players
            <textarea id="France"/>
            <FontAwesome/>
          </div>:''}
        </div>
      </div> )
  }

  gameSettings() {
    const gn = document.getElementById("gameName").value;
    const cc = document.getElementById("countryCount").value;
    const x = confirm(`Are sure you want "${gn}" to be the name, with ${cc} countries? You wont be able to change this after its submitted!`);
    if (x === true) {
      this.setState({countryCounting: false});
    }
    this.setState({
      gameName: gn,
      gameSize: cc,
    });
  }

  render() {
    return (
      <div id="newgame">
        <NavBar/>
        { this.state.countryCounting ?
        <div className="cc">
            Name your Games save.
            <CustomizedInputs ids="gameName" label="Game Name"/>
            How many Countries do you want to work with?
            <SimpleSelect/>
            <div id="inputCC" onClick={() => this.gameSettings()}>
              {ContainedButtons('Next')}
            </div>
        </div> : 
          this.gameSetup()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

New = connect(mapStateToProps, actions)(New);
export default New;