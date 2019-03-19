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

const countryListGlobal = ['germany', 'russia', 'britain', 'france', 'usa', 'austria', 'ottoman', 'italy', 'serbia']

class GamePowerPoints extends Component {

  state = {
    Germany : 20000,
    AttackOrder : [],
    posit : 1,
    sortTemp : undefined,

    indirect : {
      'atk' : [],
      'def' : [],
    },
    rankPosit : 1, // sets what 
    rank : { // orders the rank of each country
      1 : null,
      2 : null,
      3 : null,
      4 : null,
      5 : null,
      6 : null,
      7 : null,
      8 : null,
      9 : null,
    },

    Order : {
      'germany' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'russia' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'britain' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'france' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'usa' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'austria' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'ottoman' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'italy' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
      },
      'serbia' : {
        'Win' : 0,
        'Loss' : 0,
        'IWin' : 0,
        'ILoss' : 0,
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
  
  // REMOVE NOLOSS  
  noLoss = async () => {
    let a = [];
    let x = [];
    if (this.state.Order['germany']['Loss'] == 0) {
      a.push('germany');
      x.push(this.state.Order['germany']['Win'])
      console.log('g')
    }
    if (this.state.Order['russia']['Loss'] == 0) {
      a.push('russia');
      x.push(this.state.Order['russia']['Win'])
      console.log('r')
    }
    if (this.state.Order['britain']['Loss'] == 0) {
      a.push('britain');
      x.push(this.state.Order['britain']['Win'])
      console.log('b')
    }
    if (this.state.Order['france']['Loss'] == 0) {
      a.push('france');
      x.push(this.state.Order['france']['Win'])
      console.log('f')
    }
    if (this.state.Order['usa']['Loss'] == 0) {
      a.push('usa');
      x.push(this.state.Order['usa']['Win'])
      console.log('u')
    }
    if (this.state.Order['austria']['Loss'] == 0) {
      a.push('austria');
      x.push(this.state.Order['austria']['Win'])
      console.log('a')
    }
    if (this.state.Order['ottoman']['Loss'] == 0) {
      a.push('ottoman');
      x.push(this.state.Order['ottoman']['Win'])
      console.log('o')
    }
    if (this.state.Order['italy']['Loss'] == 0) {
      a.push('italy');
      x.push(this.state.Order['italy']['Win'])
      console.log('i')
    }
    if (this.state.Order['serbia']['Loss'] == 0) {
      a.push('serbia');
      x.push(this.state.Order['serbia']['Win'])
      console.log('s')
    }
    let tie = undefined;
    let m = undefined;

    for (let i = 0; a.length >= i; i++) {
      try {
      tie = a[i]
      console.log(a)
      console.log(tie)
      console.log(x)
      m = Math.max(...x)
      console.log(m + " " + this.state.Order[tie]['Win'])
      if (tie) {
        if (this.state.Order[tie]['Win'] == m) {
          console.log('first place' + tie)
          await this.setState({rank: { ...this.state.rank, [this.state.posit]: tie } })
          await this.setState({posit : this.state.posit + 1 })
          console.log(tie + ' ' + m + ' ' + x)
          x.splice( x.indexOf(m), 9 )
          console.log(tie + ' ' + m + ' ' + x)
        }
      }
      }
      catch(err) {}
    }
    console.log(x)
    console.log(this.state.Order)
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

  organizationofWins = async (countryList) => {
    // let rPosit = 1
    const temp = countryList

    // .map(val, i) => {}  // const x = [...countryList]

    // let rank = this.state.rank
    //console.log(temp.length)
    const ranker = temp.map(() => {
      //console.log(temp.length)
      const c = this.sort(countryList, this.state.Order, this.props.countryPast)
      countryList.splice(c, 1)
      return c
      // console.log(c)
      // rank[rPosit] = c
      // console.log(rank)

      // rPosit++     
    })
    console.log(ranker)
    //this.setState({ rank : rank })

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
    
    await this.organizationofWins(['germany', 'russia', 'britain', 'france', 'usa', 'austria', 'ottoman', 'italy', 'serbia'])
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