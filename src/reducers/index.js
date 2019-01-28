import { combineReducers } from 'redux';
import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types";

// Redux Store
const initialState = {
  // link : 'https://ww1simdatabase.herokuapp.com',
  link : 'http://localhost:5000',
  login : false,
  username : '',
  password : '',
  fname: '',
  lname: '',
  loadGames : [],
  round: 1,
  countryOrder : {
     1: 'germany',
     2: 'russia',
     3: 'britain',
     4: 'france',
     5: 'usa',
     6: 'austria',
     7: 'ottoman',
     8: 'italy',
     9: 'serbia',
  },
  countryCount: 9,
  PowerPoints : {
    'germany' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'russia' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'britain' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'france' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'usa' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'austria' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'ottoman' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'italy' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
    'serbia' : {
      'attacking' : [],
      'attack' : [],
      'defence' : [],
      'trading' : [],
    },
  },
  CountryName : {
    'germany' : 'Germany',
    'russia' : 'Russia',
    'britain' : 'Britain',
    'france' : 'France',
    'usa' : 'United States',
    'austria' : 'Austria',
    'ottoman' : 'Ottoman Empire',
    'italy' : 'Italy',
    'serbia' : 'Serbia',
  },
  countryGold : {
    'germany' : 20000,
    'russia' : 20000,
    'britain' : 20000,
    'france' : 20000,
    'usa' : 20000,
    'austria' : 20000,
    'ottoman' : 20000,
    'italy' : 20000,
    'serbia' : 20000,
  },
  countryPowerPoints : {
    'germany' : 1800,
    'russia' : 1700,
    'britain' : 1500,
    'france' : 1400,
    'usa' : 1200,
    'austria' : 1000,
    'ottoman' : 800,
    'italy' : 700,
    'serbia' : 600,
  },
  sevenPowerPoints : {
    1 : 1500,
    2 : 1400,
    3 : 1100,
    4 : 1000,
    5 : 800,
    6 : 700,
    7 : 400,
  },
  eightPowerPoints : {
    1 : 1600,
    2 : 1500,
    3 : 1300,
    4 : 1200,
    5 : 1000,
    6 : 800,
    7 : 700,
    8 : 600,
  },
  ninePowerPoints : {
    1 : 1800,
    2 : 1700,
    3 : 1500,
    4 : 1400,
    5 : 1200,
    6 : 1000,
    7 : 800,
    8 : 700,
    9 : 600,
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