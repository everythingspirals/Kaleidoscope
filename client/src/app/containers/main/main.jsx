import React from 'react';
import Header from 'common/header/header.jsx';
import style from './main.css'
import {GridManager} from 'lib/grid';

export default React.createClass({

  render() {

    let config = {
      grids:[
        {
          id:"nav",
          top:null,
          right:null,
          bottom:"gallery",
          left:null
        },
        {
          id:"gallery",
          top:"nav",
          right:null,
          bottom:null,
          left:null
        }
      ],
      initialGrid:"nav"
    }

    return (
      <GridManager config={config}>
        <div>
          <Header/>
          {this.props.children}
        </div>
      </GridManager>
    )
  }
});
