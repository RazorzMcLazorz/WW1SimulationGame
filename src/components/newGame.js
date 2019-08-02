import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import CustomizedInputs from './parts/text'
import ContainedButtons from './parts/button'
import IconButtons from './parts/playerAddButton'
import SimpleSelect from './parts/countryInput'

export const countryMoney = 20000

export const gameSize7 = {
  countryBoard : {
    'germany' : 1,
    'russia' : 2,
    'britain' : 3,
    'france' : 4,
    'austria' : 5,
    'ottoman' : 6,
    'italy' : 7,
  },
  countryPowerPoints : {
    'germany' : 1500,
    'russia' : 1400,
    'britain' : 1100,
    'france' : 1000,
    'austria' : 800,
    'ottoman' : 700,
    'italy' : 600,
  }
}

export const gameSize8 = {
  countryBoard : {
    'germany' : 1,
    'russia' : 2,
    'britain' : 3,
    'france' : 4,
    'austria' : 5,
    'ottoman' : 6,
    'italy' : 7,
    'serbia' : 8,
  },
  countryPowerPoints : {
    'germany' : 1600,
    'russia' : 1500,
    'britain' : 1300,
    'france' : 1200,
    'austria' : 1000,
    'ottoman' : 800,
    'italy' : 700,
    'serbia' : 600,
  }
}

export const gameSize9 = {
  countryBoard : {
    'germany' : 1,
    'russia' : 2,
    'britain' : 3,
    'france' : 4,
    'usa' : 5,
    'austria' : 6,
    'ottoman' : 7,
    'italy' : 8,
    'serbia' : 9,
  },
  countryPowerPoints : {
    'germany' : 1800,
    'russia' : 1700,
    'britain' : 1500,
    'france' : 1400,
    'usa' : 1200,
    'austria' : 1000,
    'ottoman' : 800,
    'italy' : 700,
    'serbia' : 600,
  }
}

const countryNumber9 = {
  1 : 'germany',
  2 : 'russia',
  3 : 'britain',
  4 : 'france',
  5 : 'usa',
  6 : 'austria',
  7 : 'ottoman',
  8 : 'italy',
  9 : 'serbia'
}
const countryNumber8 = {
  1 : 'germany',
  2 : 'russia',
  3 : 'britain',
  4 : 'france',
  5 : 'austria',
  6 : 'ottoman',
  7 : 'italy',
  8 : 'serbia'
}
const countryNumber7 = {
  1 : 'germany',
  2 : 'russia',
  3 : 'britain',
  4 : 'france',
  5 : 'austria',
  6 : 'ottoman',
  7 : 'italy'
}

class New extends Component {

  state = {
    saved: '',
    countryCounting: true,
    gameName: '',
    gameSize: null,
    gamePlayers: {
      'germany' : [],
      'russia' : [],
      'britain' : [],
      'france' : [],
      'usa' : [],
      'austria' : [],
      'ottoman' : [],
      'italy' : [],
      'serbia' : []
    },
  }

  saveGameNameNotSame = async (save_name, save_username) => {
    const res = await fetch(`${this.props.link}/save/find?name=${save_name}&username=${save_username}`)
    const json = await res.json()
    return json.data
  }

  saveGameID = async (save_name, save_count, save_username, round) => {
    await fetch(`${this.props.link}/save/add?save_name=${save_name}&save_count=${save_count}&save_username=${save_username}&round=${round}`)
  }

  add(country) {
    if (this.state.gamePlayers[country].length >= 10) {
      console.log('Max')
    }
    else {
      this.setState({
        gamePlayers: {
          ...this.state.gamePlayers,
          [country]: [...this.state.gamePlayers[country], country]
        }
      })
    }
  }

  gameSetup() {
    return  (       
      <div id="newGameDetails">
        <div>
{/* Germany */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Germany Players
            <div onClick={() => this.add('germany')}>
              <IconButtons/>
            </div>
            <div>
              {
                this.state.gamePlayers['germany'].map((country, i) => 
                  <div key={i}>
                    <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                  </div>
                )
              }
            </div>
          </div>:''}
{/* Russia */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Russia Players
          <div onClick={() => this.add('russia')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['russia'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Britain */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Britain Players
          <div onClick={() => this.add('britain')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['britain'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* France */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          France Players
          <div onClick={() => this.add('france')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['france'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* United States Players */}
          {this.state.gameSize == 9 ?
          <div>
          United States Players
          <div onClick={() => this.add('usa')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['usa'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Austria */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
            Austria Players
          <div onClick={() => this.add('austria')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['austria'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Ottoman */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Ottoman Empire Players
          <div onClick={() => this.add('ottoman')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['ottoman'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Italy */}
          {this.state.gameSize == 7 || this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Italy Players
          <div onClick={() => this.add('italy')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['italy'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
{/* Serbia */}
          {this.state.gameSize == 8 || this.state.gameSize == 9 ?
          <div>
          Serbia Players
          <div onClick={() => this.add('serbia')}>
            <IconButtons/>
          </div>
          <div>
            {
              this.state.gamePlayers['serbia'].map((country, i) => 
                <div key={i}>
                  <CustomizedInputs ids={`${country}player${i+1}`} label={`player${i+1}`}/>
                </div>
              )
            }
          </div>
          </div>:''}
        </div>
      </div> )
  }

  gameSettings = async () => {
    if (this.props.login === true) {
      const gn = document.getElementById("gameName").value // Grabs User GameName
      const cc = document.getElementById("countryCount").value // Grabs User selected country
      const g = this.saveGameNameNotSame(gn, this.props.username) 
      try {
        console.log(g[0]['save_username'])
        this.props.history.push("/new")
        console.log('Game already has the same name')
      }
      catch(err) {
        const x = confirm(`Are sure you want "${gn}" to be the name, with ${cc} countries? You wont be able to change this after its submitted!`)
        if (x) {
          this.setState({countryCounting: false})
          
          this.setState({
            gameName: gn,
            gameSize: cc,
          })
          this.props.changeState({
            countryCount: cc,
            gameName: gn,
          })

          this.saveGameID(gn, cc, this.props.username, 1)
        }
      }
    }
    else {
      console.log('user not logged in')
      this.props.history.push("/login")
    }
  }

  saveErrorCatch(country, count) {
    let x = ''
    try {
      x = document.getElementById(`${country}player${count}`).value
    }
    catch(err) {
      x = ''
    }
    return x
  }

  savePlayers = async (country) => {
    const p1 = this.saveErrorCatch(country, 1)
    const p2 = this.saveErrorCatch(country, 2)
    const p3 = this.saveErrorCatch(country, 3)
    const p4 = this.saveErrorCatch(country, 4)
    const p5 = this.saveErrorCatch(country, 5)
    const p6 = this.saveErrorCatch(country, 6)
    const p7 = this.saveErrorCatch(country, 7)
    const p8 = this.saveErrorCatch(country, 8)
    const p9 = this.saveErrorCatch(country, 9)
    const p10 = this.saveErrorCatch(country, 10)
    await fetch(`
    ${this.props.link}/players/add?user=${this.props.username}
    &save=${this.state.gameName}
    &country=${country}
    &count=${this.state.gamePlayers[country].length}
    &p1=${p1}
    &p2=${p2}
    &p3=${p3}
    &p4=${p4}
    &p5=${p5}
    &p6=${p6}
    &p7=${p7}
    &p8=${p8}
    &p9=${p9}
    &p10=${p10}
    `)
    console.log(this.state.gamePlayers)
  }
  countryDataSetup = async (save, name, rank, gold, pp) => {
    console.log(save, name, rank, gold, pp)
    await fetch(`${this.props.link}/current/add?user=${this.props.username}&save=${save}&name=${name}&rank=${rank}&gold=${gold}&pp=${pp}`)
    await fetch(`${this.props.link}/past/add?user=${this.props.username}&save=${save}&name=${name}&rank=${rank}&gold=${gold}&pp=${pp}`)

    // ?user=${this.props.username}&save=${this.props.gameName},&name=${country}&rank=${pos + 1}&gold=${this.props.countryGold[country]}&pp=${this.props.ninePowerPoints[pos + 1]}&round=${this.props.round}
this.props.changeState({
      countryOrder: {
        ...this.props.countryOrder,
        [name]: rank
      }
    })
  }
  // connecting save with data
  gatherDataSetup = async (savename) => {
    if (this.props.countryCount == 7) {
      console.log('7')
      for (let x = 0; x <= 7; x++) {
        await this.countryDataSetup(`${savename}`, countryNumber7[x], x, 20000, this.props.sevenPowerPoints[x])
      }
    await this.props.changeState({countryOrder : ['germany', 'russia', 'britain', 'france', 'austria', 'ottoman', 'italy']})
    }

    else if (this.props.countryCount == 8) {
      console.log('8')
      for (let x = 0; x <= 8; x++) {
        await this.countryDataSetup(`${savename}`, countryNumber8[x], x, 20000, this.props.eightPowerPoints[x])
      }
      await this.props.changeState({countryOrder : ['germany', 'russia', 'britain', 'france', 'austria', 'ottoman', 'italy', 'serbia']})
    }

    else if (this.props.countryCount == 9) {
      console.log('9')
      for (let x = 0; x <= 9; x++) {
        await this.countryDataSetup(`${savename}`, countryNumber9[x], x, 20000, this.props.ninePowerPoints[x])
      }
      await this.props.changeState({countryOrder : ['germany', 'russia', 'britain', 'france', 'usa', 'austria', 'ottoman', 'italy', 'serbia']})
    }

    else {
      console.log('Failed to Save')
    }
  }

  saveGame = async () => {
    if (this.props.login === true) {
      const g = confirm(`By accepting this you will have created a new game with the settings you set.`)
      if(g) {
        this.savePlayers('germany')
        this.savePlayers('britain')
        this.savePlayers('france')
        this.savePlayers('usa')
        this.savePlayers('austria')
        this.savePlayers('ottoman')
        this.savePlayers('italy')
        this.savePlayers('serbia')
        // Gathers data for the new game and saves it just incase so that it has defaults to load
        await this.gatherDataSetup( this.state.gameName)
        this.props.changeState({round : 1})

        this.props.history.push("/") // moves user to Home so the user can run the game
        // /players/add?user=Razorz&save=Game%20Test&country=germany&count=2&p1=nate&p2=kit&p3=logi&p4=&p5=&p6=&p7=&p8=&p9=&p10=
      }
    }
    else {
      console.log('user not logged in')
      this.props.history.push("/login")
    }
  }

  render() {
    return (
      <div id="newgame">
        <NavBar/>
        { this.state.countryCounting ?
        <div className="cc">
            Name your Games save.
            <CustomizedInputs ids="gameName" label="Game Name"/>
            How many Countries do you want to work with?
            <SimpleSelect/>
            <div id="inputCC" onClick={() => this.gameSettings()}>
              {ContainedButtons('Next')}
            </div>
        </div> : 
          <div id="gameset">
          {this.gameSetup()}
          <div id='savegameset'>
            <div onClick={() => this.saveGame()}>
              {ContainedButtons('Save and Start')}
            </div>
          </div>
          </div>}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

New = connect(mapStateToProps, actions)(New)
export default New