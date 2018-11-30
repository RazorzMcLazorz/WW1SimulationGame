import { combineReducers } from 'redux';
import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types";

const initialState = {
    testValue : 'hi im a value',
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