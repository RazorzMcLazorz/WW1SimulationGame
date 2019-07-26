import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import Delete from './parts/delete'
import { Link } from 'react-router-dom'

class LoadGame extends Component {
  state = {
    games : [],
  }

  userSavedGames = async ( username ) => {
    const res = await fetch(`${this.props.link}/save/games?username=${username}`)
    const json = await res.json()
    await this.setState({games: json.data})
  }

  countryDataSetup = async (countrys) => {

    countrys.map((name, rank) =>
      this.props.changeState({
        countrySetupOrder: {
          ...this.props.countrySetupOrder,
          [name]: rank + 1
        }
      })
    )
    console.log('All Countries Loaded')
    console.log(['Countries Loaded', this.props.countrySetupOrder ])
  }

  countrySetupOrderLoad = async (num, name, count) => {
    const rres = await fetch(`${this.props.link}/current/grab?user=${this.props.username}&name=${name}`)
    const cRound = await rres.json()
    const ores = await fetch(`${this.props.link}/save/games?username=${this.props.username}`)
    const cOrder = await ores.json()
    const save = await fetch(`${this.props.link}/save/selectgame?username=${this.props.username}&name=${name}`)
    const selectedGame = await save.json()

    console.log('Game Country starting on ' + cRound.data[0].country_name)

    // console.log(cRound.data) // Dev Database Retrieval
    // console.log(cOrder.data) // Dev Game Database Retrieval
    // console.log(selectedGame.data) // Dev Selected Game Retrieval
    // set global round
    this.props.changeState({round : selectedGame.data[0].save_round})
    // sets global game size
    this.props.changeState({ countryCount : selectedGame.data[0].save_count })
    
    // countryOrder 
    let tempArray = [...this.props.countryOrder]

    cRound.data.forEach(array => {
      tempArray.push(array['country_name'])
    })

    this.props.changeState({ countryOrder: tempArray })

    let countryL = []
    cRound.data.forEach((x , numb) =>{
      countryL.push(cRound.data[numb].country_name)
    })
    // console.log(countryL) // Dev Country Modable Array

    this.countryDataSetup(countryL)

    // await console.log(cRound.data[0]['country_rank'], cRound.data[1]['country_rank'], cRound.data[3]['country_rank'], cRound.data[4]['country_rank'], cRound.data[5]['country_rank'], cRound.data[6]['country_rank'], cRound.data[7]['country_rank'])

    this.props.history.push("/game");
  }

  loadGame = async (name, count, num) => {
    
    this.props.changeState({
      gameName : name,
      countryCount : count,
    });
    this.countrySetupOrderLoad(num, name, count);
  }

  deleteGame = async (user, game) => {
    await fetch(`${this.props.link}/save/delete?user=${user}&save=${game}`)
    const res = await fetch(`${this.props.link}/save/games?username=${user}`)
    const json = await res.json()
    this.props.changeState({loadGames : json})
    this.props.history.push('/')
  }

  displayGameSave(name, count, num) {
    return (
      <div id='gameload'>
        <div to="/game" className={`load`} onClick={() => this.loadGame(name, count, num)}>
          <div className="loadTitle">{name}</div>
          <div className="loadCount">{count}</div>
        </div>
        <div onClick={() => this.deleteGame(this.props.username, name)}>
          <Delete/>
        </div>
        <Link to='/players'>
          <IconButton>
            <people_outline/>
          </IconButton>
        </Link>
      </div>
    );
  };

  loadGames() {
    let mapper = []
    for (let i = 0; i < this.props.loadGames.length; i++) {
      mapper.push(i)
    }
    return (<div>
      {mapper.map((game, pos) =>
      <div key={pos}>
        <div>
        {this.displayGameSave(this.props.loadGames[game]['save_name'], this.props.loadGames[game]['save_count'], game)}
        </div>
      </div>)
      }
    </div>)
  }

  render() {
    return (
      <div className='loadGame'>
        <NavBar/>
        <div id="loadBody">
          {this.loadGames()}
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
LoadGame = connect(mapStateToProps, actions)(LoadGame);
export default LoadGame;