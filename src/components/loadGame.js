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

  displayGameSave(name, count) {
    return (
      <Link to="/game" className={`load`} >
        <div className="loadTitle">{name}</div>
        <div className="loadCount">{count}</div>
      </Link>
    )
  }

  loadGames() {
    return (<div>
      {this.props.loadGames.length >= 1 ?
      <div>
        {this.displayGameSave(this.props.loadGames[0]['save_name'], this.props.loadGames[0]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 2 ?
      <div>
        {this.displayGameSave(this.props.loadGames[1]['save_name'], this.props.loadGames[1]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 3 ?
      <div>
        {this.displayGameSave(this.props.loadGames[2]['save_name'], this.props.loadGames[2]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 4 ?
      <div>
        {this.displayGameSave(this.props.loadGames[3]['save_name'], this.props.loadGames[3]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 5 ?
      <div>
        {this.displayGameSave(this.props.loadGames[4]['save_name'], this.props.loadGames[4]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 6 ?
      <div>
        {this.displayGameSave(this.props.loadGames[5]['save_name'], this.props.loadGames[5]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 7 ?
      <div>
        {this.displayGameSave(this.props.loadGames[6]['save_name'], this.props.loadGames[6]['save_count'])}
      </div>: ''}
      {this.props.loadGames.length >= 8 ?
      <div>
        {this.displayGameSave(this.props.loadGames[7]['save_name'], this.props.loadGames[7]['save_count'])}
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