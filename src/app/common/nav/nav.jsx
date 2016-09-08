import React from 'react';
import {Grid,GridNode} from 'lib/grid';
import style from './nav.css';

export default React.createClass({
    render() {
      let navItems = this.props.navItems;
      
      return (
        <nav className="nav">
            <Grid gridId={this.props.gridId} nodeCount={navItems.length}>
              <ul>
                {navItems.map( (navItem,key) => {
                  return (
                   <li key={key}>
                     <GridNode nodeId={key}>
                       <a href={navItem.href} >{navItem.name}</a>
                     </GridNode>
                   </li>
                )})}
             </ul>
           </Grid>
        </nav>
      )
    }
});
