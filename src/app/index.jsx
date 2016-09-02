//External
import React from 'react';
import ReactDom from 'react-dom';
import Store from 'redux/store';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//Internal
import Main from 'containers/main/main.jsx';
import GalleryPage from 'containers/gallery/gallery.jsx';
import DetailsPage from 'containers/details/details.jsx';
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
          <IndexRoute component={GalleryPage}/>
          <Route path="gallery/:genre" component={GalleryPage}/>
          <Route path="details/:id" component={DetailsPage}/>
        </Route>
      </Route>
    </Router>
  </Provider>),
  document.querySelector('#root'))
