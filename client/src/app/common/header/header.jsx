import React from 'react';
import {Grid,GridNode} from 'lib/grid';
import headerStyle from './header.css';

export default React.createClass({
    render() {
      return (
        <nav className="header">
            <div className="header-title">PVM</div>
            <Grid gridId="nav" rowLength="3" nodeLength="3">
              <ul className="header-nav">
               <li className="header-nav-item">
                 <GridNode nodeId="0" href="top-rated">
                   <a href="#/top-rated">Top Rated</a>
                 </GridNode>
               </li>
               <li className="header-nav-item">
                 <GridNode nodeId="1" href="comedy">
                   <a href="#/comedy">Comedy</a>
                 </GridNode>
               </li>
               <li className="header-nav-item">
                 <GridNode nodeId="2" href="drama">
                   <a href="#/drama">Drama</a>
                 </GridNode>
               </li>
             </ul>
           </Grid>
        </nav>
      )
    }
});
