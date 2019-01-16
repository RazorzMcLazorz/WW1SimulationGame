import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import CustomizedInputs from './parts/text';
import ContainedButtons from './parts/button';
import IconButtons from './parts/playerAddButton';
import SimpleSelect from './parts/countryInput';

class New extends Component {

  state = {
    saved: '',
    countryCounting: true,
    gameName: '',
    gameSize: null,
    gamePlayers: {
      'germany' : [],
      'russia' : [],
      'britain' : [],
      'france' : [],
      'usa' : [],
      'austria' : [],
      'ottoman' : [],
      'italy' : [],
      'serbia' : []
    },
  }

  saveGameID = async (save_name, save_count, save_username) => {
    const res = await fetch(`${this.props.link}/user/single?save_name=${save_name}&save_count=${save_count}&save_username=${save_username}`)
    const json = await res.json()
    // .then(response => response.json())
    // .then(response => this.setState({ mysqlDB : response.data }))
    // .catch(err => console.error(err))
    return json.data;
  }

  add(country) {
    if (this.state.gamePlayers[country].length >= 10) {
      console.log('Max')
    }
    else {
      this.setState({
        gamePlayers: {
          ...this.state.gamePlayers,
          [country]: [...this.state.gamePlayers[country], country]
        }
      })
    }
  }

  gameSetup() {
    return  (       
      <div id="newGameDetails">
        <div>
{/* Germany */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Germany Players
            <div onClick={() => this.add('germany')}>
              <IconButtons/>
            </div>
            <div>
              {
                this.state.gamePlayers['germany'].map((country, i) => 
                  <div key={i}>
                    <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                  </div>
                )
              }
            </div>
          </div>:''}
{/* Russia */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Russia Players
          <div onClick={() => this.add('russia')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['russia'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Britain */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Britain Players
          <div onClick={() => this.add('britain')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['britain'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* France */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          France Players
          <div onClick={() => this.add('france')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['france'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* United States Players */}
          {this.state.gameSize == 9 ?
          <div>
          United States Players
          <div onClick={() => this.add('usa')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['usa'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Austria */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Austria Players
          <div onClick={() => this.add('austria')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['austria'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Ottoman */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Ottoman Empire Players
          <div onClick={() => this.add('ottoman')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['ottoman'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Italy */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Italy Players
          <div onClick={() => this.add('italy')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['italy'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Serbia */}
          {this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Serbia Players
          <div onClick={() => this.add('serbia')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['serbia'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
        </div>
      </div> )
  }

  gameSettings() {
    if (this.props.login === true) {
    const gn = document.getElementById("gameName").value;
    const cc = document.getElementById("countryCount").value;
    const x = confirm(`Are sure you want "${gn}" to be the name, with ${cc} countries? You wont be able to change this after its submitted!`);
    if (x === true) {
      this.setState({countryCounting: false});
    }
    this.setState({
      gameName: gn,
      gameSize: cc,
    });}
    else {
      console.log('user not logged in');
      this.props.history.push("/login");
    }
  }

  saveGame() {
    if (this.props.login === true) {

    }
    else {
      console.log('user not logged in');
      this.props.history.push("/login");
    }
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
          <div id="gameset">
          {this.gameSetup()}
          <div id='savegameset'>
            <div onClick={() => this.saveGame()}>
              {ContainedButtons('Save and Start')}
            </div>
          </div>
          </div>}
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