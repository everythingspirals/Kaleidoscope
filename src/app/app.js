//External
import React from 'react';
import ReactDom from 'react-dom';
import Store from 'redux/store';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

//Internal
import Main from 'containers/main/main.jsx';
import DetailsPage from 'containers/details/details.jsx';
import GalleryPage from 'containers/gallery/gallery';
import ComedyPage from 'containers/gallery/comedy';
import DramaPage from 'containers/gallery/drama';
import KidsPage from 'containers/gallery/kids';
import SportsPage from 'containers/gallery/sports';
import TrendingPage from 'containers/gallery/trending';
import {Guide} from 'lib/guide/index.js';

//Init
function init(){
  let guide = new Guide();
  guide.init().then(function(){
    guide.update(guide);
  });
}

ReactDom.render(
  (<Provider store={Store}>
    <Router history={hashHistory}>
      <Route onEnter={init}>
        <Route path="/" component={Main}>
          <IndexRedirect to="gallery" />
          <Route path="gallery" component={GalleryPage}>
            <IndexRedirect to="trending" />
            <Route path="comedy" component={ComedyPage}/>
            <Route path="drama" component={DramaPage}/>
            <Route path="kids" component={KidsPage}/>
            <Route path="sports" component={SportsPage}/>
            <Route path="trending" component={TrendingPage}/>
          </Route>
          <Route path="details/:id" component={DetailsPage}/>
        </Route>
      </Route>
    </Router>
  </Provider>),
  document.querySelector('#root'))
