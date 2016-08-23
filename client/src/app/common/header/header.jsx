import React from 'react';
import headerStyle from './header.css';

export default React.createClass({
    render() {
      return (
        <nav className="header">


            <div className="header-title">K</div>
            <ul className="header-nav">

             <li className="header-nav-item">
               <a href="#/top-rated">Top Rated</a>
             </li>
             <li className="header-nav-item">
               <a href="#/comedy">Comedy</a>
             </li>
             <li className="header-nav-item">
               <a href="#/drama">Drama</a>
             </li>

           </ul>

        </nav>
      )
    }
});
