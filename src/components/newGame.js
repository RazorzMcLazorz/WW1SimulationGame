import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import { Link } from 'react-router-dom';

class New extends Component {

  state = {
    saved: '',
  }

  saveValue(country) {
    let x = document.getElementById(country).value;
    this.setState({ saved : 'saved ' + country + ' // ' + x});
    console.log(country);
    let a = this.props.countryPlayers;
    a[country] = x;
    a[country] = a[country].split(" ");
    console.log(a[country]);
    this.props.changeState({ countryPlayers : a });
    console.log(this.props.countryPlayers[country] + ' ' + this.props.countryPlayers[country][0]);
  }

  render() {
    return (
      <div>
        <div>
          {/* upper */}
          <div>
            <div>
              Add Each Player to their specific country
            </div>
            <div>
              Seperate each name with a "space"
            </div>
            <div>
              {this.state.saved}
            </div>
          </div>
         <div>
           <div>
             Germany Players
             <textarea id="Germany"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('Germany')}/>
             </button>
           </div>
           <div>
             Russia Players
             <textarea id="Russia"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('Russia')}/>
             </button>
           </div>
           <div>
             France Players
             <textarea id="France"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('France')}/>
             </button>
           </div>
           <div>
             Austria Players
             <textarea id="Austria"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('Austria')}/>
             </button>
           </div>
           <div>
             Ottoman Players
             <textarea id="Ottoman"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('Ottoman')}/>
             </button>
           </div>
           <div>
             Italy Players
             <textarea id="Italy"/>
             <button className="saveButtonBox">
             <i className="far fa-save saveButton" onClick={() => this.saveValue('Italy')}/>
             </button>
           </div>
         </div>
         {/* lower */}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

New = connect(mapStateToProps, actions)(New);
export default New;