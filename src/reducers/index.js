import { combineReducers } from 'redux';
import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types";

// Redux Store
const initialState = {
    countryBoard : {
        'G' : 1,
        'R' : 2,
        'F' : 3,
        'A' : 4,
        'O' : 5,
        'I' : 6,
    }
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