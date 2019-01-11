import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import { Link } from 'react-router-dom';
import ContainedButtons from '../components/parts/button';

class Login extends Component {

  state = {
    mysqlDB : [],
    user : {
      user_id: '',
      user_fname: '',
      user_lname: '',
      user_password: '',
      user_code: '',
      user_username: ''
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _ => {
    fetch('https://ww1simdb.herokuapp.com/user')
    .then(response => response.json())
    .then(response => this.setState({ mysqlDB : response.data }))
    .catch(err => console.error(err))
  }

  addProduct = _ => {
    const { product } = this.state;
    fetch(`https://ww1simdb.herokuapp.com/login/add?name=${this.state.users.name}&price=${this.state.users.password}`)
    .then(this.getProducts)
    .catch(err => console.error(err))
  }

  renderProduct = ({user_id, user_fname, user_lname, user_password, user_code, user_username}) => <div key={user_id}>{`${user_id} ${user_fname} ${user_lname} ${user_password} ${user_code} ${user_username}`}</div>

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