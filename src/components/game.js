import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import { Link } from 'react-router-dom'
import ContainedButtons from './parts/button'
import WarPeace from './parts/warPeaceSelect'
import Attacking from './parts/Attacking'
import CustomizedInputs from './parts/text'

class Game extends Component {
  state = {
    countryAttacking : {
      'germany' : true,
      'russia' : true,
      'britain' : true,
      'france' : true,
      'usa' : true,
      'austria' : true,
      'ottoman' : true,
      'italy' : true,
      'serbia' : true,
    },
    countryAtk : {
      'germany' : true,
      'russia' : true,
      'britain' : true,
      'france' : true,
      'usa' : true,
      'austria' : true,
      'ottoman' : true,
      'italy' : true,
      'serbia' : true,
    },
    countryDef : {
      'germany' : true,
      'russia' : true,
      'britain' : true,
      'france' : true,
      'usa' : true,
      'austria' : true,
      'ottoman' : true,
      'italy' : true,
      'serbia' : true,
    },
    trading : {
      'germany' : true,
      'russia' : true,
      'britain' : true,
      'france' : true,
      'usa' : true,
      'austria' : true,
      'ottoman' : true,
      'italy' : true,
      'serbia' : true,
    }
  }

  countryDefAlly(country){
    if (this.state.countryDef[country] === false) {
    this.setState({countryDef: { ...this.state.countryDef, [country]: true } })
    this.setState({countryAtk: { ...this.state.countryAtk, [country]: false } })
    this.setState({trading: { ...this.state.trading, [country]: false } })
    this.setState({countryAttacking: { ...this.state.countryAttacking, [country]: false } })
    }
    else {
      this.setState({countryDef: { ...this.state.countryDef, [country]: false } })
    }
  }

  countryAtkAlly(country){
    if (this.state.countryAtk[country] === false) {
    this.setState({countryAtk: { ...this.state.countryAtk, [country]: true } })
    this.setState({countryDef: { ...this.state.countryDef, [country]: false } })
    this.setState({trading: { ...this.state.trading, [country]: false } })
    this.setState({countryAttacking: { ...this.state.countryAttacking, [country]: false } })
    }
    else {
      this.setState({countryAtk: { ...this.state.countryAtk, [country]: false } })
    }
  }

  attackCountry(country){
    if (this.state.countryAttacking[country] === false) {
    this.setState({countryAttacking: { ...this.state.countryAttacking, [country]: true } })
    this.setState({countryDef: { ...this.state.countryDef, [country]: false } })
    this.setState({countryAtk: { ...this.state.countryAtk, [country]: false } })
    this.setState({trading: { ...this.state.trading, [country]: false } })
    }
    else {
      this.setState({countryAttacking: { ...this.state.countryAttacking, [country]: false } })
    }
  }

  trading(country){
    if (this.state.trading[country] === false) {
    this.setState({trading: { ...this.state.trading, [country]: true } })
    this.setState({countryAttacking: { ...this.state.countryAttacking, [country]: false } })
    this.setState({countryDef: { ...this.state.countryDef, [country]: false } })
    this.setState({countryAtk: { ...this.state.countryAtk, [country]: false } })
    }
    else {
      this.setState({trading: { ...this.state.trading, [country]: false } })
    }
  }

  gameinterior(country) {
    return(
      <div>
        <div className="countryTab">
          {/* Country Rank */}
          <div className="countryCount">{this.props.countrySetupOrder[country]}</div>
          {/* Country Name */}
          <div className="countryName">{this.props.CountryName[country]}</div>
          {/* Country WarPeace Selection */}
          <div className="countryRadio"><WarPeace label={country}/></div>
          {document.getElementById(`${country}Gold`).defaultValue=this.props.countryGold[country]}
          <div><CustomizedInputs label="Gold" ids={`${country}Gold`}/></div>
        </div>
        { this.state.countryAttacking[country]?
        <div className="additional">
          <div className="name">Attacking</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}Attacking`} country={country} label='attacking'/>
          </div>
        </div>
        : ''}
        { this.state.countryAtk[country] ?
        <div className="additional">
          <div className="name">Attack Alliance</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}AttackAlliance`} country={country} label='attack'/>
          </div>
        </div>
        : ''}
        { this.state.countryDef[country] ? 
        <div className="additional">
          <div className="name">Defence Alliance</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}DefenceAlliance`} country={country} label='defence'/>
          </div>
        </div>
        : ''}
        { this.state.trading[country] ?
        <div className="additional">
          <div className="name">Trading</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}Trade`} country={country} label='trading'/>
          </div>
        </div>
        : ''}
      </div>
    )
  }

  orderingGame() {

  }

  swaptoPP = async (country, label, pos, ID) => {
    await this.props.changeState({
      PowerPoints : {
        ...this.props.PowerPoints, [country] : {
          ...this.props.PowerPoints[country], [label] : {
            ...this.props.PowerPoints[country][label], [pos] : document.getElementById(`${country}${ID}${pos}`).value
          }
        }
      }
    });
    await console.log('swap' + this.props.PowerPoints[country][label][country] + ' ' + document.getElementById(`${country}${ID}${pos}`).value);
  }

  saveAndContinue = async () => {
    // await this.swaptoPP('germany', 'attacking', 'russia', 'Attacking');
    // await this.swaptoPP('germany', 'attacking', 'britain',  'Attacking');
    await console.log('Continue');
    await this.props.history.push("/powerpoints");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="gamebody">
          <div id="roundNumber">
            Round {this.props.round}
          </div>
          <div id="gameRender">
            {
              this.props.countryOrder.map((country) =>
                <div>
                  {this.gameinterior(country)}
                </div>
              )
            }
          </div>
          <div id='gamebottom'>
            <div to="/powerpoints" onClick={() => this.saveAndContinue()}>
              {ContainedButtons('Continue')}
            </div>
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

Game = connect(mapStateToProps, actions)(Game);
export default Game;