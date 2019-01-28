import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button';
import RadioButton from './parts/radioButton';
import { Radio } from '@material-ui/core';
import WarPeace from './parts/warPeaceSelect';
import AttackCountry from './parts/AttackCountry';
import Attacking from './parts/Attacking';
import Dialog from './parts/Dialog';
import CustomizedInputs from './parts/text';

class Game extends Component {
  state = {
    countryAttacking : {
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
    countryAtk : {
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
    countryDef : {
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
    trading : {
      'germany' : false,
      'russia' : false,
      'britain' : false,
      'france' : false,
      'usa' : false,
      'austria' : false,
      'ottoman' : false,
      'italy' : false,
      'serbia' : false,
    }
  }

  // countryOrder

  gameNaming(country) {
    let x = '';
    if (country == 'germany') {
      x = 'Germany'
    }
    if (country == 'russia') {
      x = 'Russia'
    }
    if (country == 'britain') {
      x = 'Britain'
    }
    if (country == 'france') {
      x = 'France'
    }
    if (country == 'usa') {
      x = 'United States'
    }
    if (country == 'austria') {
      x = 'Austria'
    }
    if (country == 'ottoman') {
      x = 'Ottoman Empire'
    }
    if (country == 'italy') {
      x = 'Italy'
    }
    if (country == 'serbia') {
      x = 'Serbia'
    }
    return x;
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

  gameinterior(country, count) {
    let gamingName = this.gameNaming(country)
    return(
      <div>
        <div className="countryTab">
          <div className="countryCount">{count}</div>
          <div className="countryName">{gamingName}</div>
          <div className="countryRadio"><WarPeace label={country}/></div>
          <div onClick={() => this.attackCountry(country)}>{ContainedButtons('Attacking')}</div>
          <div onClick={() => this.countryAtkAlly(country)}>{ContainedButtons('Attack Alliance')}</div>
          <div onClick={() => this.countryDefAlly(country)}>{ContainedButtons('Defence Alliance')}</div>
          <div onClick={() => this.trading(country)}>{ContainedButtons('Trade')}</div>
          <div><CustomizedInputs label="Gold" ids={`${country}Gold`}/></div>
        </div>
        { this.state.countryAttacking[country]?
        <div className="additional">
          <div className="name">Attacking</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}Attacking`} country={country}/>
          </div>
        </div>
        : ''}
        { this.state.countryAtk[country] ?
        <div className="additional">
          <div className="name">Attack Alliance</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}AttackAlliance`} country={country}/>
          </div>
        </div>
        : ''}
        { this.state.countryDef[country] ? 
        <div className="additional">
          <div className="name">Defence Alliance</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}DefenceAlliance`} country={country}/>
          </div>
        </div>
        : ''}
        { this.state.trading[country] ?
        <div className="additional">
          <div className="name">Trading</div>
          <div className="checkBoxs">
          <Attacking count={this.props.countryCount} ids={`${country}Trade`} country={country}/>
          </div>
        </div>
        : ''}
      </div>
      )
  }

  orderingGame() {

  }

  saveAndContinue = async () => {
    console.log('Save and Continue');
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
            {this.gameinterior('germany',1)}
            {this.gameinterior('russia',2 )}
            {this.gameinterior('britain',3)}
            {this.gameinterior('france',4 )}
            {this.gameinterior('usa',5    )}
            {this.gameinterior('austria',6)}
            {this.gameinterior('ottoman',7)}
            {this.gameinterior('italy',8  )}
            {this.gameinterior('serbia',9 )}
          </div>
          <div id='gamebottom'>
            <Link to="/powerpoints" onClick={() => this.saveAndContinue()}>
              {ContainedButtons('Save and Continue')}
            </Link>
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