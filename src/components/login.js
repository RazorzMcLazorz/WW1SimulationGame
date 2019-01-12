import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import { Link } from 'react-router-dom';
import ContainedButtons from '../components/parts/button';

const link = 'https://ww1simdatabase.herokuapp.com';
// const link = 'http://localhost:5000';

class Login extends Component {

  state = {
    mysqlDB : [],
    user : {
      user_id: '',
      user_username: '',
      user_password: '',
      user_fname: '',
      user_lname: ''
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _ => {
    fetch(`${link}/user`)
    .then(response => response.json())
    .then(response => this.setState({ mysqlDB : response.data }))
    .catch(err => console.error(err))
  }

  // addProduct = _ => {
  //   const { product } = this.state;
  //   fetch(`${link}/login/add?name=${this.state.users.name}&price=${this.state.users.password}`)
  //   .then(this.getProducts)
  //   .catch(err => console.error(err))
  // }

  renderProduct = ({user_id, user_username, user_password, user_fname, user_lname}) => <div key={user_id}>{`${user_id} ${user_username} ${user_password} ${user_fname} ${user_lname}`}</div>

  render() {
    return (
      <div className='login'>
      <form>
        Name: <input type="text" name="fname" id="fname" onChange={e => this.setState({ users: { ...this.state.users, name: e.target.value }})}/>
        Password: <input type="password" id="pass"  onChange={e => this.setState({ users: { ...this.state.users, password: e.target.value }})}/>
        <Link to="/login">
          <input type="submit" value="submit"/>
        </Link>
      </form>
        {this.state.mysqlDB.map(this.renderProduct)}

      <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Login = connect(mapStateToProps, actions)(Login);
export default Login;