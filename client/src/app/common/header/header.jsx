import React from 'react';
import headerStyle from './header.css';

export default React.createClass({
    render() {
      return (
        <nav className="header navbar navbar-dark navbar-fixed-top bg-inverse">
          <div className="container-fluid">
            <img src="img/logo.png" className="logo pull-xs-left"/>
            <div className="navbar-brand">
              Kaleidoscope
            </div>
            <ul className="nav navbar-nav pull-xs-right">
             <li className="nav-item">
               <a className="nav-link" href="#/top-rated">Top Rated</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#/comedy">Comedy</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#/drama">Drama</a>
             </li>
           </ul>
          </div>
        </nav>
      )
    }
});
