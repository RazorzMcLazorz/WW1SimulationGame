import { combineReducers } from 'redux';
import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types";

const powerPointsDupe = {
  'attacking' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'attack' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'defence' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
  'trading' : {
    'germany' : false,
    'russia' : false,
    'britain' : false,
    'france' : false,
    'usa' : false,
    'austria' : false,
    'ottoman' : false,
    'italy' : false,
    'serbia' : false,
  },
}

// Redux Store
const initialState = {
  link : 'https://ww1simdatabase.herokuapp.com',
  // link : 'http://localhost:5000',
  login : false,
  username : '',
  password : '',
  fname: '',
  lname: '',
  loadGames : [],
  round: 0,
  countryPastArray: [],
  countryPast : {
    'germany': 1,
    'russia': 2,
    'britain': 3,
    'france': 4,
    'usa': 5,
    'austria': 6,
    'ottoman': 7,
    'italy': 8,
    'serbia': 9,
  },
  // countryOrder contains an array of each country from the database the way they are givin
  countryOrder : [],
  countrySetupOrder : {
    'germany': 1,
    'russia': 2,
    'britain': 3,
    'france': 4,
    'usa': 5,
    'austria': 6,
    'ottoman': 7,
    'italy': 8,
    'serbia': 9,
  },
  gameName : '',
  countryCount: 9,
  PowerPoints : {
    'germany' : {...powerPointsDupe},
    'russia' : {...powerPointsDupe},
    'britain' : {...powerPointsDupe},
    'france' : {...powerPointsDupe},
    'usa' : {...powerPointsDupe},
    'austria' : {...powerPointsDupe},
    'ottoman' : {...powerPointsDupe},
    'italy' : {...powerPointsDupe},
    'serbia' : {...powerPointsDupe},
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
  // this one is to realign powerpoints
  PowerpointsRealign : {
    7 : [1500, 1400, 1100, 1000, 800, 700, 400],
    8 : [1600, 1500, 1300, 1200, 1000, 800, 700, 600],
    9 : [1800, 1700, 1500, 1400, 1200, 1000, 800, 700, 600]
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