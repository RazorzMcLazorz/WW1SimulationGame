import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import { Link } from 'react-router-dom';
import ContainedButtons from './button';

class NavBar extends Component {
  state = {
    DB : false,
  }

  componentDidMount() {
    this.getConnection();
    
  }

  getConnection () {
    fetch(`${this.props.link}/`)
    .then(response => response.json())
    .then(response => this.setState({ DB : response.data }))
    .catch(err => console.error(err))
  }

  render() {
    return(
      <div className="navBar">
          {this.state.DB ?
          <div id="connected" className="DBConnection" backgroundcolor="#3f51b5">
            DB CON
          </div>:
          <div id="disconnected" className="DBConnection" onClick={console.log(this.state.DB)}>
            DB DIS
          </div>}
          {this.props.login ?
          <Link to='/' className="buttons" id="accountButton">
            {ContainedButtons(`${this.props.fname}`)}
          </Link> :
          <Link to='/login' className="buttons" id="accountButton">
            {ContainedButtons('Guest')}
          </Link>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
NavBar = connect(mapStateToProps, actions)(NavBar);
export default NavBar;