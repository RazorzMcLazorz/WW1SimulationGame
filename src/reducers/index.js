import { combineReducers } from 'redux';
import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types";

// Redux Store
const initialState = {
// the base values are default in new games
  countryBoard : {
      'G' : 1,
      'R' : 2,
      'F' : 3,
      'A' : 4,
      'O' : 5,
      'I' : 6
  },
  countryPowerPoints : {
    'G' : 1500,
    'R' : 1400,
    'F' : 1300,
    'A' : 1200,
    'O' : 1100,
    'I' : 1000
  },
  countryMoney : {
    'G' : 20000,
    'R' : 20000,
    'F' : 20000,
    'A' : 20000,
    'O' : 20000,
    'I' : 20000
  },
// the country array collects who is part of each country
  countryPlayers : {
    'Germany': [],
    'Russia': [],
    'France': [],
    'Austria': [],
    'Ottoman' : [],
    'Italy': []
  },
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      return state;
    case CHANGE_STATE:
      const changedState = action.payload
      return {
        ...state,
        ...changedState
      }
    default:
      return state;
  }
};
  
  export default rootReducer;