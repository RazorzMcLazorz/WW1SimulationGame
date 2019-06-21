import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import ContainedButtons from './parts/button'
import CustomizedInputs from './parts/text'

const countryListGlobal = ['germany', 'russia', 'britain', 'france', 'usa', 'austria', 'ottoman', 'italy', 'serbia']
const countryValues = {
	'Win' : 0,
	'Loss' : 0,
	'IWin' : 0,
	'ILoss' : 0,
}

class GamePowerPoints extends Component {

  state = {
    AttackOrder : [],
    posit : 1,
    sortTemp : undefined,

    indirect : {
      'atk' : [],
      'def' : [],
    },
    rankPosit : 1, // sets what 
    rank : [], // rank of the countrys
    Order : {
      'germany' : {...countryValues},
      'russia' : {...countryValues},
      'britain' : {...countryValues},
      'france' : {...countryValues},
      'usa' : {...countryValues},
      'austria' : {...countryValues},
      'ottoman' : {...countryValues},
      'italy' : {...countryValues},
      'serbia' : {...countryValues},
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
    return (
      <div className="DefencePoints">
        {this.props.PowerPoints['germany']['attacking'][country] ?<CustomizedInputs label={'Germany Defence'} ids={`${country}Defendergermany`}/>: ''}
        {this.props.PowerPoints['russia']['attacking'][country] ?<CustomizedInputs label={'Russia Defence'} ids={`${country}Defenderrussia`}/>: ''}
        {this.props.PowerPoints['britain']['attacking'][country] ?<CustomizedInputs label={'Britain Defence'} ids={`${country}Defenderbritain`}/>: ''}
        {this.props.PowerPoints['france']['attacking'][country] ?<CustomizedInputs label={'Austria Defence'} ids={`${country}Defenderaustria`}/>: ''}
        {this.props.PowerPoints['usa']['attacking'][country] ?<CustomizedInputs label={'France Defence'} ids={`${country}Defenderfrance`}/>: ''}
        {this.props.PowerPoints['austria']['attacking'][country] ?<CustomizedInputs label={'USA Defence'} ids={`${country}Defenderusa`}/>: ''}
        {this.props.PowerPoints['ottoman']['attacking'][country] ?<CustomizedInputs label={'Ottoman Defence'} ids={`${country}Defenderottoman`}/>: ''}
        {this.props.PowerPoints['italy']['attacking'][country] ?<CustomizedInputs label={'Italy Defence'} ids={`${country}Defenderitaly`}/>: ''}
        {this.props.PowerPoints['serbia']['attacking'][country] ?<CustomizedInputs label={'Serbia Defence'} ids={`${country}Defenderserbia`}/>: ''}
      </div>
    );
  }

  pos = async (country, label, pos) => {
    try {
    let x = document.getElementById(`${country}${label}PPShare${pos}`).value
    return x
    }
    catch(err) {
      return 0
    }
  }

  whosAttacking = async (label, pos) => {
    let x = 0;
    let a = 0;
    let n = null;
    if (label == 'attack') {
      n = 'atk'
    }
    else if (label == 'defence') {
      n = 'def'
    }
    let t = this.state.indirect[n];

    try {
      a = +document.getElementById(`germany${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('germany')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`russia${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('russia')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`britain${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('britain')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`france${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('france')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`usa${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('usa')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`austria${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('austria')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`ottoman${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('ottoman')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`italy${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('italy')
    }
    catch(err) {}
    try {
      a = +document.getElementById(`serbia${label}PPShare${pos}`).value;
      x = x + a;
      await t.push('serbia')
    }
    catch(err) {}

    console.log(n + 'indirect')
    console.log(t)
    await this.setState({indirect: { ...this.state.indirect, [n]: t} })
    console.log(this.state.indirect)

    console.log(x);
    return x;
  }
  whosDefending = async (pos) => {
    let x = null;
    let a = null;
    try {
      a = +document.getElementById(`${pos}Defendergermany`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderrussia`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderbritain`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderfrance`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderusa`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderaustria`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderottoman`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderitaly`).value;
      x = x + a;
    }
    catch(err) {}
    try {
      a = +document.getElementById(`${pos}Defenderserbia`).value;
      x = x + a;
    }
    catch(err) {}
    return x;
  }

  isitwar (country) {
    const ppatk = this.props.PowerPoints[country]['attacking']

    const x = countryListGlobal.map(c => ppatk[c])
    
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
    await this.props.history.push("/results");
  }

  Attacker (country, attacking) {
    let x = 0
    try {
    let a = +document.getElementById(`${country}attackingPPShare${attacking}`).value
    x = x + a;
    }
    catch(err) {}
    return x
  }

  warfinalbattle (country) {
    let a = this.isitwar(country);
    this.battle(country, 'russia')
  }

  startOrg = async (list, country) => {
    for (let i = 0; list.length >= i; i++) {
      let Atk = list[i];
      if (Atk) {
        console.log(country)
        console.log(Atk)
        let x = await this.whosAttacking('attack', country)
        x = x + await this.Attacker(country, Atk)
        let d = await this.whosAttacking('defence', Atk)
        d = d + await this.whosDefending(Atk)
        if (x > d) {
          await this.setState({Order: { ...this.state.Order, [country]: { ...this.state.Order[country], ['Win']: this.state.Order[country]['Win'] + 1 } } })
          await this.setState({Order: { ...this.state.Order, [Atk]: { ...this.state.Order[Atk], ['Loss']: this.state.Order[Atk]['Loss'] + 1 } } })
          for (let o = 0; this.state.indirect['atk'].length >= o; o++) {
            if (this.state.indirect['atk'] == []) {
              await this.setState({Order: { ...this.state.Order, [this.state.indirect['atk'][o]]: { ...this.state.Order[this.state.indirect['atk'][o]], ['IWin']: this.state.Order[this.state.indirect['atk'][o]]['IWin'] + 1 } } })
            }
          }
        }
        else if (d > x) {
          console.log('defence win')
          await this.setState({Order: { ...this.state.Order, [Atk]: { ...this.state.Order[Atk], ['Win']: this.state.Order[Atk]['Win'] + 1 } } })
          console.log(this.state.Order[Atk]['Win'])
          await this.setState({Order: { ...this.state.Order, [country]: { ...this.state.Order[country], ['Loss']: this.state.Order[country]['Loss'] + 1 } } })
          console.log(this.state.Order[country]['Loss'])
          if (this.state.indirect['def'] == []) {
          await this.setState({Order: { ...this.state.Order, [this.state.indirect['def'][i]]: { ...this.state.Order[this.state.indirect['def'][i]], ['ILoss']: this.state.Order[this.state.indirect['atk'][i]]['ILoss'] + 1 } } })
          }
        }
        else if (d == x) {
          console.log('Tie')
          if (this.props.countryPast[country] < this.props.countryPast[Atk]) {
            console.log('attacking win')
            await this.setState({Order: { ...this.state.Order, [country]: { ...this.state.Order[country], ['Win']: this.state.Order[country]['Win'] + 1 } } })
            console.log(this.state.Order[country]['Win'])
            await this.setState({Order: { ...this.state.Order, [Atk]: { ...this.state.Order[Atk], ['Loss']: this.state.Order[Atk]['Loss'] + 1 } } })
            console.log(this.state.Order[Atk]['Loss'])
            if (this.state.indirect['atk'] == []) {
            await this.setState({Order: { ...this.state.Order, [this.state.indirect['atk'][i]]: { ...this.state.Order[this.state.indirect['atk'][i]], ['IWin']: this.state.Order[this.state.indirect['atk'][i]]['IWin'] + 1 } } })
            }
          }
          else if (this.props.countryPast[country] > this.props.countryPast[Atk]) {
            console.log('defence win')
            await this.setState({Order: { ...this.state.Order, [Atk]: { ...this.state.Order[Atk], ['Win']: this.state.Order[Atk]['Win'] + 1 } } })
            console.log(this.state.Order[Atk]['Win'])
            await this.setState({Order: { ...this.state.Order, [country]: { ...this.state.Order[country], ['Loss']: this.state.Order[country]['Loss'] + 1 } } })
            console.log(this.state.Order[country]['Loss'])
            if (this.state.indirect['def'] == []) {
              await this.setState({Order: { ...this.state.Order, [this.state.indirect['def'][i]]: { ...this.state.Order[this.state.indirect['def'][i]], ['ILoss']: this.state.Order[this.state.indirect['atk'][i]]['ILoss'] + 1 } } })
            }
          }
          else {
            console.log('failed')
          }
        }
        else {
          console.log('failed')
        }
      }
    }
  }

sort(countryList, Order, countryPast) {
    let x = countryList[0]
    countryList.forEach(entry => {
        if (Order[x]['Loss'] > Order[entry]['Loss']) {
          x = entry
        }
        else if (Order[x]['Loss'] == Order[entry]['Loss']) {
          if (Order[x]['ILoss'] > Order[entry]['ILoss']) {
            x = entry
          }
          else if (Order[x]['ILoss'] == Order[entry]['ILoss']) {
            if (Order[x]['Win'] < Order[entry]['Win']) {
              x = entry
            }
            else if (Order[x]['Win'] == Order[entry]['Win']) {
              if (Order[x]['IWin'] < Order[entry]['IWin']) {
                x = entry
              }
              else if (Order[x]['IWin'] == Order[entry]['IWin']) {
                if (countryPast[x] > countryPast[entry]) {
                  x = entry
                }
              }
            }
          }
      }
      countryList.forEach (compare => {
          if (Order[x]['Loss'] > Order[compare]['Loss']) {
            x = compare
          }
          else if (Order[x]['Loss'] == Order[compare]['Loss']) {
            if (Order[x]['ILoss'] > Order[compare]['ILoss']) {
              x = compare
            }
            else if (Order[x]['ILoss'] == Order[compare]['ILoss']) {
              if (Order[x]['Win'] < Order[compare]['Win']) {
                x = compare
              }
              else if (Order[x]['Win'] == Order[compare]['Win']) {
                if (Order[x]['IWin'] < Order[compare]['IWin']) {
                  x = compare
                }
                else if (Order[x]['IWin'] == Order[compare]['IWin']) {
                  if (countryPast[x] > countryPast[compare]) {
                    x = compare
                  }
                }
              }
            }
          }
      })
    })
	return x
}

organizationofWins (countryList) {
  // Makes a new copy of the array \/
  let countryTempList = [...countryList]
  const ranker = countryList.map(() => {
    const CountryRanked = this.sort(countryTempList, this.state.Order, this.props.countryPast)
  countryTempList = countryTempList.filter(word => word !== CountryRanked)
    return CountryRanked   
  })
  this.props.changeState({ countryOrder: ranker});
  this.props.history.push('/results');
}

  getResults = async () => {
    this.startOrg(await this.isitwar('germany'), 'germany')
    this.startOrg(await this.isitwar('russia'),  'russia')
    this.startOrg(await this.isitwar('britain'), 'britain')
    this.startOrg(await this.isitwar('france'),  'france')
    this.startOrg(await this.isitwar('usa'),     'usa')
    this.startOrg(await this.isitwar('austria'), 'austria')
    this.startOrg(await this.isitwar('ottoman'), 'ottoman')
    this.startOrg(await this.isitwar('italy'),   'italy')
    this.startOrg(await this.isitwar('serbia'),  'serbia') 
    
    this.organizationofWins(this.props.countryCount === 9 ?['germany', 'russia', 'britain', 'france', 'usa', 'austria', 'ottoman', 'italy', 'serbia'] : this.props.countryCount === 8 ? ['germany', 'russia', 'britain', 'france', 'austria', 'ottoman', 'italy', 'serbia'] : this.props.countryCount === 7 ? ['germany', 'russia', 'britain', 'france', 'austria', 'ottoman', 'italy'] : [])
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="gamePowerPoints">
          <div id="roundNumber">
            Round {this.props.round}
          </div>
          {
            this.props.countryOrder.map((country, pos) =>
              <div className="mappedCountry" key={pos+1}>
                <div className="countryPP">
                  <div className="countryTitle">{this.props.CountryName[country]}</div>
                  <div className="countryPowerP">{this.props.PowerpointsRealign[this.props.countryOrder.length][pos]} Power Points Available</div>
                  <div>{this.defend(country)}</div>
                </div>
                <div className="countryPPAttacking">
                  <div>Attacking</div>
                  <div>{this.attacking(country, 'attacking')}</div>
                </div>
                <div className="countryPPAttackAlliance">
                  <div>Attack Alliance</div>
                  <div>{this.attacking(country, 'attack')}</div>
                </div>
                <div className="countryPPDefenceAlliance">
                  <div>Defence Alliance</div>
                  <div>{this.attacking(country, 'defence')}</div>
                </div>
              </div>
            )
          }
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