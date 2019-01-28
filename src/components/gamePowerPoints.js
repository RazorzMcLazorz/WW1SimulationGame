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
        {this.props.PowerPoints[country][label][0] ? 
        country == 'germany' ? '' :
        <div>
          <CustomizedInputs label='Germany' ids={`${country}${label}PPSharegermany`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][1] ?
          country == 'russia' ? '' :
        <div>
          <CustomizedInputs label='Russia' ids={`${country}${label}PPSharerussia`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][2] ?
          country == 'britain' ? '' :
        <div>
          <CustomizedInputs label='Britain' ids={`${country}${label}PPSharebritain`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][3] ?
          country == 'france' ? '' :
        <div>
          <CustomizedInputs label='France' ids={`${country}${label}PPSharefrance`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][4] ?
          country == 'usa' ? '' :
        <div>
          <CustomizedInputs label='United States' ids={`${country}${label}PPShareusa`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][5] ?
          country == 'austria' ? '' :
        <div>
          <CustomizedInputs label='Austria' ids={`${country}${label}PPShareaustria`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][6] ?
          country == 'ottoman' ? '' :
        <div>
          <CustomizedInputs label='Ottoman Empire' ids={`${country}${label}PPShareottoman`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][7] ?
          country == 'italy' ? '' :
        <div>
          <CustomizedInputs label='Italy' ids={`${country}${label}PPShareitaly`}/> 
        </div>
        : ''}
        {this.props.PowerPoints[country][label][8] ?
          country == 'serbia' ? '' :
        <div>
          <CustomizedInputs label='Serbia' ids={`${country}${label}PPShareserbia`}/> 
        </div>
        : ''}
      </div>
    );
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
            <Link to="/results">
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