import React from 'react';
import ReactDom from 'react-dom';

import RatingPage from 'content/top-rated/top-rated-page.jsx';
import ComedyPage from 'content/comedy/comedy.jsx';
import DramaPage from 'content/drama/drama.jsx';

import bootstrap from '../public/css/bootstrap.min.css';
import Main from 'common/main/main.jsx';
import {Router, Route, hashHistory} from 'react-router';

ReactDom.render(
  (<Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="top-rated" component={RatingPage}/>
      <Route path="comedy" component={ComedyPage}/>
      <Route path="drama" component={DramaPage}/>
    </Route>

  </Router>),
  document.querySelector('#root'))
