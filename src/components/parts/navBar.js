import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import { Link } from 'react-router-dom';
import ContainedButtons from './button';

class NavBar extends Component {

  componentDidMount() {
  }

  getConnection = async () => {
    try {
      const res = await fetch(`${this.props.link}/`)
      const json = await res.json()
    }catch(err) {
      alert(err);
    }
  }

  render() {
    return(
      <div className="navBar">
          {this.props.login ?
          <Link to='/' className="buttons" id="accountButton">
            {ContainedButtons(`${this.props.lname}`)}
          </Link> :
          <Link to='/login' className="buttons" id="accountButton">
            {ContainedButtons('Login')}
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