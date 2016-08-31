import React from 'react';
import ReactDom from 'react-dom';
import Store from 'redux/store';
import {Provider} from 'react-redux';
import RatingPage from 'containers/top-rated/top-rated-page.jsx';
import ComedyPage from 'containers/comedy/comedy.jsx';
import DramaPage from 'containers/drama/drama.jsx';
import DetailsPage from 'containers/details/details.jsx';

import bootstrap from '../public/css/bootstrap.min.css';
import Main from 'common/main/main.jsx';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

function init(){
}

ReactDom.render(
  (<Provider store={Store}>
    <Router history={hashHistory}>
      <Route onEnter={init}>
        <Route path="/" component={Main}>
          <IndexRoute component={RatingPage}/>
          <Route path="top-rated" component={RatingPage}/>
          <Route path="comedy" component={ComedyPage}/>
          <Route path="drama" component={DramaPage}/>
          <Route path="details/:id" component={DetailsPage}/>
        </Route>
      </Route>
    </Router>
  </Provider>),
  document.querySelector('#root'))
