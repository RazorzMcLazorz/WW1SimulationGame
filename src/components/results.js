import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';
import ContainedButtons from './parts/button';
import CustomizedInputs from './parts/text';
import InputAdornments from './parts/passwordText';

class Results extends Component {

  state = {
  }

  order(pos) {
    try {
      if (this.props.countryOrder[pos] == '' | this.props.countryOrder[pos] == undefined | this.props.countryOrder[pos] == null) {
        return ''
      }
      else {
    return (
      <div className="result">
        <div className="resultpos">
          {pos + 1}
        </div>
        <div className="resultTitle">
          {this.props.CountryName[this.props.countryOrder[pos]]}
        </div>
        <div className="resultPowerPoints">
          {this.props.countryPowerPoints[this.props.countryOrder[pos]]} <div>Power Points</div>
        </div>
        <div className="resultGold">
          {this.props.countryGold[this.props.countryOrder[pos]]} <div>Gold</div>
        </div>
      </div>
    );}
    }
    catch(err) {
      return '';
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="resultsBody">
          <div id="roundNumber">
              End of Round {this.props.round}
          </div>
              <div>{this.order(0)}</div>
              <div>{this.order(1)}</div>
              <div>{this.order(2)}</div>
              <div>{this.order(3)}</div>
              <div>{this.order(4)}</div>
              <div>{this.order(5)}</div>
              <div>{this.order(6)}</div>
              <div>{this.order(7)}</div>
              <div>{this.order(8)}</div>
          <div id='resultbottom'>
            <Link to="/game">
              {ContainedButtons('Next Round')}
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Results = connect(mapStateToProps, actions)(Results);
export default Results;