import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';

class LoadGame extends Component {
  state = {
    games : [],
  }

  userSavedGames = async ( username ) => {
    const res = await fetch(`${this.props.link}/save/games?username=${username}`)
    const json = await res.json()
    await this.setState({games: json.data})
  }

  countryDataSetup = async (name, rank) => {
    await this.props.changeState({
      countrySetupOrder: {
        ...this.props.countrySetupOrder,
        [name]: rank
      }
    });
  }

  countrySetupOrderLoad = async (num, name, count) => {
    const rres = await fetch(`${this.props.link}/current/grab?user=${this.props.username}&name=${name}`)
    const cRound = await rres.json()
    const ores = await fetch(`${this.props.link}/save/games?username=${this.props.username}`)
    const cOrder = await ores.json()

    let tempArray = this.props.countryOrder
    cRound.data.forEach(array => {
      tempArray.push(array['country_name'])
    })
    this.props.changeState({ countryOrder: tempArray });
    console.log(this.props.countryOrder)

    await this.props.changeState({
      countrySetupOrder : {
        ...this.props.countrySetupOrder, ['germany'] : cOrder.data[num]['save_count']
      },
      round : cRound.data[0]['country_round'],
    })
    if (count >= 7) {
       this.countryDataSetup(cRound.data[0]['country_name'], cRound.data[0]['country_rank']);
       this.countryDataSetup(cRound.data[1]['country_name'], cRound.data[1]['country_rank']);
       this.countryDataSetup(cRound.data[2]['country_name'], cRound.data[2]['country_rank']);
       this.countryDataSetup(cRound.data[3]['country_name'], cRound.data[3]['country_rank']);
       this.countryDataSetup(cRound.data[4]['country_name'], cRound.data[4]['country_rank']);
       this.countryDataSetup(cRound.data[5]['country_name'], cRound.data[5]['country_rank']);
       this.countryDataSetup(cRound.data[6]['country_name'], cRound.data[6]['country_rank']);
    }
    else if (count >= 8) {
       this.countryDataSetup(cRound.data[0]['country_name'], cRound.data[0]['country_rank']);
       this.countryDataSetup(cRound.data[1]['country_name'], cRound.data[1]['country_rank']);
       this.countryDataSetup(cRound.data[2]['country_name'], cRound.data[2]['country_rank']);
       this.countryDataSetup(cRound.data[3]['country_name'], cRound.data[3]['country_rank']);
       this.countryDataSetup(cRound.data[4]['country_name'], cRound.data[4]['country_rank']);
       this.countryDataSetup(cRound.data[5]['country_name'], cRound.data[5]['country_rank']);
       this.countryDataSetup(cRound.data[6]['country_name'], cRound.data[6]['country_rank']);
       this.countryDataSetup(cRound.data[7]['country_name'], cRound.data[7]['country_rank']);
    }
    else if (count >= 9) {
       this.countryDataSetup(cRound.data[0]['country_name'], cRound.data[0]['country_rank']);
       this.countryDataSetup(cRound.data[1]['country_name'], cRound.data[1]['country_rank']);
       this.countryDataSetup(cRound.data[2]['country_name'], cRound.data[2]['country_rank']);
       this.countryDataSetup(cRound.data[3]['country_name'], cRound.data[3]['country_rank']);
       this.countryDataSetup(cRound.data[4]['country_name'], cRound.data[4]['country_rank']);
       this.countryDataSetup(cRound.data[5]['country_name'], cRound.data[5]['country_rank']);
       this.countryDataSetup(cRound.data[6]['country_name'], cRound.data[6]['country_rank']);
       this.countryDataSetup(cRound.data[7]['country_name'], cRound.data[7]['country_rank']);
       this.countryDataSetup(cRound.data[8]['country_name'], cRound.data[8]['country_rank']);
    }
    else {

    }
    // await console.log(cRound.data[0]['country_rank'], cRound.data[1]['country_rank'], cRound.data[3]['country_rank'], cRound.data[4]['country_rank'], cRound.data[5]['country_rank'], cRound.data[6]['country_rank'], cRound.data[7]['country_rank'])
    await console.log(this.props.countrySetupOrder);
    await console.log(cOrder.data[0]['save_count']);
    await console.log(cRound.data[0]['country_round']);
    await this.props.history.push("/game");
  }

  loadGame = async (name, count, num) => {
    
    await this.props.changeState({
      gameName : name,
      countryCount : count,
    });
    await this.countrySetupOrderLoad(num, name, count);
  }

  displayGameSave(name, count, num) {
    return (
      <div to="/game" className={`load`} onClick={() => this.loadGame(name, count, num)}>
        <div className="loadTitle">{name}</div>
        <div className="loadCount">{count}</div>
      </div>
    )
  }

  loadGames() {
    return (<div>
      {this.props.loadGames.length >= 1 ?
      <div>
        {this.displayGameSave(this.props.loadGames[0]['save_name'], this.props.loadGames[0]['save_count'], 0)}
      </div>: ''}
      {this.props.loadGames.length >= 2 ?
      <div>
        {this.displayGameSave(this.props.loadGames[1]['save_name'], this.props.loadGames[1]['save_count'], 1)}
      </div>: ''}
      {this.props.loadGames.length >= 3 ?
      <div>
        {this.displayGameSave(this.props.loadGames[2]['save_name'], this.props.loadGames[2]['save_count'], 2)}
      </div>: ''}
      {this.props.loadGames.length >= 4 ?
      <div>
        {this.displayGameSave(this.props.loadGames[3]['save_name'], this.props.loadGames[3]['save_count'], 3)}
      </div>: ''}
      {this.props.loadGames.length >= 5 ?
      <div>
        {this.displayGameSave(this.props.loadGames[4]['save_name'], this.props.loadGames[4]['save_count'], 4)}
      </div>: ''}
      {this.props.loadGames.length >= 6 ?
      <div>
        {this.displayGameSave(this.props.loadGames[5]['save_name'], this.props.loadGames[5]['save_count'], 5)}
      </div>: ''}
      {this.props.loadGames.length >= 7 ?
      <div>
        {this.displayGameSave(this.props.loadGames[6]['save_name'], this.props.loadGames[6]['save_count'], 6)}
      </div>: ''}
      {this.props.loadGames.length >= 8 ?
      <div>
        {this.displayGameSave(this.props.loadGames[7]['save_name'], this.props.loadGames[7]['save_count'], 7)}
      </div>: ''}
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