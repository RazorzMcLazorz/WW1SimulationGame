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
    AttackOrder : [],
    Order : {
      'germany' : {
        Win : null,
        Loss : null,
      },
      'russia' : {
        Win : null,
        Loss : null,
      },
      'britain' : {
        Win : null,
        Loss : null,
      },
      'france' : {
        Win : null,
        Loss : null,
      },
      'usa' : {
        Win : null,
        Loss : null,
      },
      'austria' : {
        Win : null,
        Loss : null,
      },
      'ottoman' : {
        Win : null,
        Loss : null,
      },
      'italy' : {
        Win : null,
        Loss : null,
      },
      'serbia' : {
        Win : null,
        Loss : null,
      },
    }
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

  defend(country) {
    let A = false;
    let B = false;
    let C = false;
    let D = false;
    let E = false;
    let F = false;
    let G = false;
    let H = false;
    let I = false;
    if (this.props.PowerPoints['germany']['attacking'][country]) {
      A = true;
    }
    if (this.props.PowerPoints['russia']['attacking'][country]) {
      B = true;
    }
    if (this.props.PowerPoints['britain']['attacking'][country]) {
      C = true;
    }
    if (this.props.PowerPoints['france']['attacking'][country]) {
      D = true;
    }
    if (this.props.PowerPoints['usa']['attacking'][country]) {
      E = true;
    }
    if (this.props.PowerPoints['austria']['attacking'][country]) {
      F = true;
    }
    if (this.props.PowerPoints['ottoman']['attacking'][country]) {
      G = true;
    }
    if (this.props.PowerPoints['italy']['attacking'][country]) {
      H = true;
    }
    if (this.props.PowerPoints['serbia']['attacking'][country]) {
      I = true;
    }
    


    return (
      <div className="DefencePoints">
        {A?<CustomizedInputs label={'Germany Defence'} ids={`${country}Defendergermany`}/>: ''}
        {B?<CustomizedInputs label={'Russia Defence'} ids={`${country}Defenderrussia`}/>: ''}
        {C?<CustomizedInputs label={'Britain Defence'} ids={`${country}Defenderbritain`}/>: ''}
        {D?<CustomizedInputs label={'Austria Defence'} ids={`${country}Defenderaustria`}/>: ''}
        {E?<CustomizedInputs label={'France Defence'} ids={`${country}Defenderfrance`}/>: ''}
        {F?<CustomizedInputs label={'USA Defence'} ids={`${country}Defenderusa`}/>: ''}
        {G?<CustomizedInputs label={'Ottoman Defence'} ids={`${country}Defenderottoman`}/>: ''}
        {H?<CustomizedInputs label={'Italy Defence'} ids={`${country}Defenderitaly`}/>: ''}
        {I?<CustomizedInputs label={'Serbia Defence'} ids={`${country}Defenderserbia`}/>: ''}
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

  whosAttacking = async (label, pos) => {
    let x = null;
    try {
      x = x + parseInt(document.getElementById(`germany${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`russia${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`britain${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`france${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`usa${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`austria${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`ottoman${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`italy${label}PPShare${pos}`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`serbia${label}PPShare${pos}`).value);
    }
    catch(err) {}
    return x;
  }
  whosDefending = async (pos) => {
    let x = null;
    try {
      x = x + parseInt(document.getElementById(`${pos}Defendergermany`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderrussia`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderbritain`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderfrance`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderusa`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderaustria`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderottoman`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderitaly`).value);
    }
    catch(err) {}
    try {
      x = x + parseInt(document.getElementById(`${pos}Defenderserbia`).value);
    }
    catch(err) {}
    return x;
  }
  grab = async (detail) => {
    let x = null;
    try {
      x = x + parseInt(document.getElementById(`${pos}Defendergermany`).value);
    }
    catch(err) {}
    return x;
  }

  isitwar = async (country) => {
    let x = [];
    x.push(this.props.PowerPoints[country]['attacking']['germany'])
    x.push(this.props.PowerPoints[country]['attacking']['russia'])
    x.push(this.props.PowerPoints[country]['attacking']['britain'])
    x.push(this.props.PowerPoints[country]['attacking']['france'])
    x.push(this.props.PowerPoints[country]['attacking']['usa'])
    x.push(this.props.PowerPoints[country]['attacking']['austria'])
    x.push(this.props.PowerPoints[country]['attacking']['ottoman'])
    x.push(this.props.PowerPoints[country]['attacking']['italy'])
    x.push(this.props.PowerPoints[country]['attacking']['serbia'])
    let a = [];
    if (x[0] === true) {
      a.push('germany')
    }
    if (x[1] === true) {
      a.push('russia')
    }
    if (x[2] === true) {
      a.push('britain')
    }
    if (x[3] === true) {
      a.push('france')
    }
    if (x[4] === true) {
      a.push('usa')
    }
    if (x[5] === true) {
      a.push('austria')
    }
    if (x[6] === true) {
      a.push('ottoman')
    }
    if (x[7] === true) {
      a.push('italy')
    }
    if (x[8] === true) {
      a.push('serbia')
    }
    return a
  }

  battle = async (country1, country2) => {
    const x = await this.whosAttacking('attack', country1);
    const a = await this.whosAttacking('defence', country2)
    console.log(x);
    console.log(a);
    await this.props.history.push("/results");
  }

  warfinalbattle = async (country) => {
    let a = this.isitwar(country);
    this.battle(country, 'russia')
  }

  startOrg = async (list, country) => {
    for (let i = 0; list.length >= i; i++) {
      await console.log(list)
    }
  }

  getResults = async () => {
    this.startOrg(await this.isitwar('germany'), 'germany')
    this.startOrg(await this.isitwar('russia'), 'russia')
    this.startOrg(await this.isitwar('britain'), 'britain')
    this.startOrg(await this.isitwar('france'), 'france')
    this.startOrg(await this.isitwar('usa'), 'usa')
    this.startOrg(await this.isitwar('austria'), 'austria')
    this.startOrg(await this.isitwar('ottoman'), 'ottoman')
    this.startOrg(await this.isitwar('italy'), 'italy')
    this.startOrg(await this.isitwar('serbia'), 'serbia')
    // this.whosAttacking('germany', 'attacking')
    // this.warfinalbattle('germany')
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
            <div>{this.defend('germany')}</div>
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
            <div>{this.defend('russia')}</div>
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
            <div>{this.defend('britain')}</div>
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
            <div>{this.defend('france')}</div>
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
              <div>{this.defend('usa')}</div>
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
            <div>{this.defend('austria')}</div>
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
            <div>{this.defend('ottoman')}</div>
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
            <div>{this.defend('italy')}</div>
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
              <div>{this.defend('serbia')}</div>
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
            <div to="/results" onClick={() => this.getResults()}>
                {ContainedButtons('Results')}
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
GamePowerPoints = connect(mapStateToProps, actions)(GamePowerPoints);
export default GamePowerPoints;