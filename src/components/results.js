import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import ContainedButtons from './parts/button'

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

  UpdateDB() {
    // updates database pastArray

    fetch(`${this.props.link}/round/update?user=${this.props.username}&save=${this.props.gameName}&round=${this.props.round}`)

    this.props.countryOrder.forEach((country, pos) => {
      console.log(country, pos)
      fetch(`${this.props.link}/current/update?user=${this.props.username}&save=${this.props.gameName},&name=${country}&rank=${pos}&gold=${this.props.countryGold[country]}&pp=${this.props.ninePowerPoints[pos]}`)
    })
    // updates database currentArray
    this.props.countryOrder.forEach((country, pos) => {
      console.log(country, pos)
      fetch(`${this.props.link}/past/update?user=${this.props.username}&save=${this.props.gameName},&name=${country}&rank=${pos}&gold=${this.props.countryGold[country]}&pp=${this.props.countryPowerPoints[country]}`)
    })
    // need to add a database update to the round system here
  }

  NextRound () {
     // This Moves the Game onto the next round
     
    this.props.countryOrder.forEach((country, pos) => {
      this.props.changeState({
        ...this.props.countrySetupOrder, [country] : pos + 1
      })
    })

    this.props.changeState({
      // resets the country boolean statements
      PowerPoints : defaul,
      // updates the round
      round : this.props.round + 1
    })

    console.log(['Country Order', this.props.countryOrder])
    this.props.countryOrder.forEach( (country, pos) => {
      const len = this.props.PowerpointsRealign[this.props.countryOrder.length]
      this.props.changeState({ 
        ...this.props.countryPowerPoints, [country] : len[pos],
        countryPastArray : [...this.props.countryOrder]
      })
      console.log(len) // Dev Country Powerpoint return
      // console.log(this.props.countryPastArray)
      
      // PowerpointsRealign

      this.UpdateDB()
    })
    
    const countrysort = {
      'germany' : this.props.countryOrder.indexOf('germany') + 1,
      'russia' : this.props.countryOrder.indexOf('russia') + 1,
      'britain' : this.props.countryOrder.indexOf('britain') + 1,
      'france' : this.props.countryOrder.indexOf('france') + 1,
      'usa' : this.props.countryOrder.indexOf('usa') + 1,
      'austria' : this.props.countryOrder.indexOf('austria') + 1,
      'ottoman' : this.props.countryOrder.indexOf('ottoman') + 1,
      'italy' : this.props.countryOrder.indexOf('italy') + 1,
      'serbia' : this.props.countryOrder.indexOf('serbia') + 1
    } 

    this.props.changeState({countryPast : countrysort })

    // console.log(this.props.countryPast) // Dev Country Position in the Array
    // console.log(this.props.PowerPoints) // Dev Displays a List of Country Boolean Values after the reset
    // console.log(this.props.countryPowerPoints) // Dev Each Country Powerpoint assigned to them

    // Moves on to the next Round
    this.props.history.push('/game')
  }

  render() {
    console.log(['Past Country List', this.props.countryPastArray]) // Dev Previous Country Order
    console.log(['New Country List', this.props.countryPast]) // Dev New Country Order
    return (
      <div>
        <NavBar/>
        <div id="resultsBody">
          <div id="roundNumber">
              End of Round {this.props.round}
          </div>
              {
                this.props.countryOrder.map((country, pos) => 
                  <div key={country + pos}>
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