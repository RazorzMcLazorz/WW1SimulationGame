import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button';
import CustomizedInputs from './parts/text';
import InputAdornments from './parts/passwordText';

const powerPointsDupe = {
  'attacking' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'attack' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'defence' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'trading' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
}

const defaul = {
  'germany' : {...powerPointsDupe},
  'russia' : {...powerPointsDupe},
  'britain' : {...powerPointsDupe},
  'france' : {...powerPointsDupe},
  'usa' : {...powerPointsDupe},
  'austria' : {...powerPointsDupe},
  'ottoman' : {...powerPointsDupe},
  'italy' : {...powerPointsDupe},
  'serbia' : {...powerPointsDupe}
}

class Results extends Component {

  state = {
  }

  order(pos) {
    try {
      if (this.props.countryOrder[pos] == '' | this.props.countryOrder[pos] == undefined | this.props.countryOrder[pos] == null) {
        return ''
      }
      else {
    return (
      <div className="result">
        <div className="resultpos">
          {pos + 1}
        </div>
        <div className="resultTitle">
          {this.props.CountryName[this.props.countryOrder[pos]]}
        </div>
        <div className="resultPowerPoints">
          {this.props.PowerpointsRealign[this.props.countryOrder.length][pos]} <div>Power Points</div>
        </div>
        <div className="resultGold">
          {this.props.countryGold[this.props.countryOrder[pos]]} <div>Gold</div>
        </div>
      </div>
    );}
    }
    catch(err) {
      return '';
    }
  }

  NextRound = async () => {

    console.log(this.props.countryPast)
    this.props.countryOrder.forEach((country, pos) =>{
      this.props.changeState({
        countryPast : [...this.props.countryPast], [country] : pos + 1
      })
      this.props.changeState({ 
        countryPastArray : [...this.props.countryOrder]
      })
    })
    console.log(this.props.countryPastArray)
    console.log(this.props.countryPast)

    this.props.countryPastArray.forEach((country, pos) => {
      fetch(`${this.props.link}/current/update?user=${this.props.username}&save=${this.props.gameName},&name=${country}&rank=${pos + 1}&gold=${this.props.countryGold[country]}&pp=${this.props.ninePowerPoints[pos + 1]}&round=${this.props.round}`)
    })

    this.props.countryOrder.forEach((country, pos) => {
      fetch(`${this.props.link}/current/update?user=${this.props.username}&save=${this.props.gameName},&name=${country}&rank=${pos + 1}&gold=${this.props.countryGold[country]}&pp=${this.props.countryPowerPoints[country]}&round=${this.props.round + 1}`)
    })

    this.props.countryOrder.forEach((country, pos) => {
      this.props.changeState({
        ...this.props.countrySetupOrder, [country] : pos + 1
      })
    })

    this.props.changeState({ round : this.props.round + 1 })

    this.props.changeState({
      PowerPoints : defaul
    })
    console.log(this.props.PowerPoints)

    this.props.countryOrder.forEach( (country, pos) => {
      const len = this.props.PowerpointsRealign[this.props.countryOrder.length]
      this.props.changeState({ 
        countryPowerPoints : [...this.props.countryPowerPoints], [country] : len[pos]
      })
      console.log(len)
      // PowerpointsRealign
    })
    
    console.log(this.props.countryPowerPoints)

    // Moves on to the next Round
    this.props.history.push('/game')
  }

  render() {
    console.log(this.props.countryPastArray)
    console.log(this.props.countryPast)
    return (
      <div>
        <NavBar/>
        <div id="resultsBody">
          <div id="roundNumber">
              End of Round {this.props.round}
          </div>
              {
                this.props.countryOrder.map((country, pos) => 
                  <div>
                    {this.order(pos)}
                  </div>
                )
              }
          <div id='resultbottom'>
            <div onClick={() => this.NextRound()}>
              {ContainedButtons('Next Round')}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Results = connect(mapStateToProps, actions)(Results);
export default Results;