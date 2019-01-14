import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from '../components/parts/button';

class App extends Component {

    newGame() {
        console.log('new');
    }

    loadGame() {
        console.log('load')
    }

  render() {
    return (
      <div className='app'>
        <NavBar/>
        <h2>Welcome to Mr. Harrison's</h2>
        <h1>WW1 Simulation Game</h1>
        
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