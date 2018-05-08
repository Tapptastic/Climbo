import 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Main} from './app/main';
import {ClimbingRoute} from './app/routes/routes';
import './index.scss';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}/>
    <Route path='/routes' component={ClimbingRoute} />
  </Router>,
  document.getElementById('root')
);
