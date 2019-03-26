import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button';
import CustomizedInputs from './parts/text';
import InputAdornments from './parts/passwordText';
import { isBoolean } from 'util';

class Login extends Component {

  state = {
    mysqlDB : [],
    loginSuccess : null,
  }

  renderProduct = ({user_id, user_username, user_password, user_fname, user_lname}) => {
    }

  componentDidMount() {
  }

  getProducts = async (username) => {
    const res = await fetch(`${this.props.link}/user/single?username=${username}`) // Use POST it hides all the data sent through
    const json = await res.json()
    // .then(response => response.json())
    // .then(response => this.setState({ mysqlDB : response.data }))
    // .catch(err => console.error(err))
    return json.data;
  }

  // addProduct = _ => {
  //   const { product } = this.state;
  //   fetch(`${link}/login/add?name=${this.state.users.name}&price=${this.state.users.password}`)
  //   .then(this.getProducts)
  //   .catch(err => console.error(err))
  // }

  login = async () => {
    // this.state.mysqlDB.map(this.renderProduct)
    const uname = document.getElementById('usernameInput').value;
    const data = await this.getProducts(uname);
    this.setState({mysqlDB: data})
    const pass = document.getElementById('adornment-password').value;
    let test1 = null;
    let test2 = null;
    if (uname === data[0]['user_username']) {
      test1 = true;}
    else {
      test1 = false;}
    if (pass === data[0]['user_password']) {
      test2 = true;}
    else {
      test2 = false;}
    if (test1 === true && test2 === true) {
      this.setState({loginSuccess: true});
      this.props.changeState({
        login : true,
        username : data[0]['user_username'],
        password : data[0]['user_password'],
        fname : data[0]['user_fname'],
        lname : data[0]['user_lname'],
      })
      this.props.history.push("/");
    }
    else {
      this.setState({loginSuccess: false});}
  }

  

  render() {
    return (
      <div className='login'>
      <NavBar />
        <CustomizedInputs ids="usernameInput" label="UserName" />
        <InputAdornments />
        <div className="buttons" onClick={() => this.login()}>
          {ContainedButtons('Login')}
        </div>
        {this.state.loginSuccess === false ?
        <div>
          Error Logging in Please Retry
        </div> : '' }
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