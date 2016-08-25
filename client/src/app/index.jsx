import React from 'react';
import ReactDom from 'react-dom';
import Store from 'redux/store';
import {Provider} from 'react-redux';
import RatingPage from 'content/top-rated/top-rated-page.jsx';
import ComedyPage from 'content/comedy/comedy.jsx';
import DramaPage from 'content/drama/drama.jsx';
import DetailsPage from 'content/details/details.jsx';

import bootstrap from '../public/css/bootstrap.min.css';
import Main from 'common/main/main.jsx';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDom.render(
  (<Provider store={Store}>
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={RatingPage}/>
      <Route path="top-rated" component={RatingPage}/>
      <Route path="comedy" component={ComedyPage}/>
      <Route path="drama" component={DramaPage}/>
      <Route path="details/:id" component={DetailsPage}/>
    </Route>
    </Router>
  </Provider>),
  document.querySelector('#root'))
