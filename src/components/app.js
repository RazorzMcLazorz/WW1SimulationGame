import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import { Link } from 'react-router-dom'
import ContainedButtons from '../components/parts/button'

class App extends Component {

  userSavedGames = async ( username ) => {
    const res = await fetch(`${this.props.link}/save/games?username=${username}`)
    const json = await res.json()
    return json.data
  }

  newGame() {
    console.log('Creating a New Game');
  }

  loadGame = async () => {
    const x = await this.userSavedGames(this.props.username);
    await this.props.changeState({loadGames : x})
    console.log('Loading an Existing Game')
  }

  render() {
    return (
      <div className='app'>
        <NavBar/>
        <h2>Welcome to Mr. Harrison's</h2>
        <h1>WW1 Simulation Game</h1>
        <p>I'm working on the game Delete Button, and Showing all users assigned to the countries.</p>

        {this.props.login ?
        <div>
            <Link to="/new" className="buttons" id="newGame" onClick={() => this.newGame()}>
                {ContainedButtons('New Game')}
            </Link>
            <Link to="/load" className="buttons" id="loadGame" onClick={() => this.loadGame()}>
                {ContainedButtons('Load Game')}
            </Link>
        </div> :
        <Link to="/login" className="buttons" id="loginButton">
            {ContainedButtons('Login')}
        </Link>}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;