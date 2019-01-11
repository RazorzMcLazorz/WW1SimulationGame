import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

import App from './components/app';
import LoadGame from './components/loadGame';
import Game from './components/game';
import New from './components/newGame';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/load" component={LoadGame} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/new" component={New}/>
            <Route exact path="/login" component={Login}/>
         </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
