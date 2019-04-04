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
          {this.props.countryPowerPoints[this.props.countryOrder[pos]]} <div>Power Points</div>
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
      // PowerpointsRealign
    })

    console.log(this.props.countryPowerPoints)

    // Moves on to the next Round
    this.props.history.push('/game')
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="resultsBody">
          <div id="roundNumber">
              End of Round {this.props.round}
          </div>
              <div>{this.order(0)}</div>
              <div>{this.order(1)}</div>
              <div>{this.order(2)}</div>
              <div>{this.order(3)}</div>
              <div>{this.order(4)}</div>
              <div>{this.order(5)}</div>
              <div>{this.order(6)}</div>
              {this.props.countryCount >= 8 ?<div>{this.order(7)}</div> : ''}
              {this.props.countryCount >= 9 ?<div>{this.order(8)}</div> : ''}
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