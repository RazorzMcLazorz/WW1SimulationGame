import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button';
import CustomizedInputs from './parts/text';
import InputAdornments from './parts/passwordText';
import { isBoolean } from 'util';

class GamePowerPoints extends Component {

  state = {
    Germany : 20000,
  }

  attacking(country, label) {
    return (
      <div className={`${label}PP`}>
        {this.props.PowerPoints[country][label]['germany'] == true? 
        
        <div>
          <CustomizedInputs label='Germany' ids={`${country}${label}PPSharegermany`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['russia'] == true?
        
        <div>
          <CustomizedInputs label='Russia' ids={`${country}${label}PPSharerussia`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['britain'] == true?
          
        <div>
          <CustomizedInputs label='Britain' ids={`${country}${label}PPSharebritain`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['france'] == true?
        
        <div>
          <CustomizedInputs label='France' ids={`${country}${label}PPSharefrance`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['usa'] == true?
  
        <div>
          <CustomizedInputs label='United States' ids={`${country}${label}PPShareusa`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['austria'] == true?
          
        <div>
          <CustomizedInputs label='Austria' ids={`${country}${label}PPShareaustria`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['ottoman'] == true?
          
        <div>
          <CustomizedInputs label='Ottoman Empire' ids={`${country}${label}PPShareottoman`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['italy'] == true?
      
        <div>
          <CustomizedInputs label='Italy' ids={`${country}${label}PPShareitaly`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label]['serbia'] == true?
        
        <div>
          <CustomizedInputs label='Serbia' ids={`${country}${label}PPShareserbia`}/> 
        </div>
        : ''}
      </div>
    );
  }

  pos = async (country, label, pos) => {
    try {
    let x = document.getElementById(`${country}${label}PPShare${pos}`).value
    // x = await parseInt(x)
    console.log('id ' + x)
    return x
    }
    catch(err) {
      return 0
    }
  }

  whosAttacking = async (country, label) => {
    let x = 0;
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPSharegermany`).value);
    }
    catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPSharerussia`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPSharebritain`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPSharefrance`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPShareusa`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPShareaustria`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPShareottoman`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPShareitaly`).value);
  }
  catch(err) {}
    try {
    x = x + parseInt(document.getElementById(`${country}${label}PPShareserbia`).value);
  }
  catch(err) {}
    await console.log(x)
    return x;
  }

  isitwar = async (country) => {
    return
  }

  getResults = async () => {
    let x = '';
    x = this.isitwar(this.props.countryOrder[1])
    this.whosAttacking('germany', 'attacking')
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="gamePowerPoints">
          <div id="roundNumber">
            Round {this.props.round}
          </div>

          <div className="countryPP">
            <div className="countryTitle">Germany</div>
            <div className="countryPowerP">{this.state.Germany} Power Points Available</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('germany', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('germany', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('germany', 'defence')}</div>
          </div>

          <div className="countryPP">
            <div className="countryTitle">Russia</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('russia', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('russia', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('russia', 'defence')}</div>
          </div>

          <div className="countryPP">
            <div className="countryTitle">Britain</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('britain', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('britain', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('britain', 'defence')}</div>
          </div>

          <div className="countryPP">
            <div className="countryTitle">France</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('france', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('france', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('france', 'defence')}</div>
          </div>

          {this.props.countryCount >= 9 ?
          <div>
            <div className="countryPP">
              <div className="countryTitle">United States</div>
            </div>
            <div className="countryPPAttacking">
              <div>Attacking</div>
              <div>{this.attacking('usa', 'attacking')}</div>
            </div>
            <div className="countryPPAttackAlliance">
              <div>Attack Alliance</div>
              <div>{this.attacking('usa', 'attack')}</div>
            </div>
            <div className="countryPPDefenceAlliance">
              <div>Defence Alliance</div>
              <div>{this.attacking('usa', 'defence')}</div>
            </div>
          </div>: ''}

          <div className="countryPP">
            <div className="countryTitle">Austria</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('austria', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('austria', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('austria', 'defence')}</div>
          </div>

          <div className="countryPP">
            <div className="countryTitle">Ottoman Empire</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('ottoman', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('ottoman', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('ottoman', 'defence')}</div>
          </div>

          <div className="countryPP">
            <div className="countryTitle">Italy</div>
          </div>
          <div className="countryPPAttacking">
            <div>Attacking</div>
            <div>{this.attacking('italy', 'attacking')}</div>
          </div>
          <div className="countryPPAttackAlliance">
            <div>Attack Alliance</div>
            <div>{this.attacking('italy', 'attack')}</div>
          </div>
          <div className="countryPPDefenceAlliance">
            <div>Defence Alliance</div>
            <div>{this.attacking('italy', 'defence')}</div>
          </div>

          {this.props.countryCount >= 8 ?
          <div>
            <div className="countryPP">
              <div className="countryTitle">Serbia</div>
            </div>
            <div className="countryPPAttacking">
              <div>Attacking</div>
              <div>{this.attacking('serbia', 'attacking')}</div>
            </div>
            <div className="countryPPAttackAlliance">
              <div>Attack Alliance</div>
              <div>{this.attacking('serbia', 'attack')}</div>
            </div>
            <div className="countryPPDefenceAlliance">
              <div>Defence Alliance</div>
              <div>{this.attacking('serbia', 'defence')}</div>
            </div>
          </div>
          : ''}
          <div id="resultsButton">
            <Link to="/results" onClick={() => this.getResults()}>
                {ContainedButtons('Results')}
            </Link>
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
GamePowerPoints = connect(mapStateToProps, actions)(GamePowerPoints);
export default GamePowerPoints;