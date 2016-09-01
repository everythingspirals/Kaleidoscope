import React from 'react';
import style from './main.css'
import {GridManager} from 'lib/grid';

export default React.createClass({

  render() {

    let config = {
      grids:[
        {
          id:"nav",
          top:"gallery",
          right:null,
          bottom:null,
          left:null
        },
        {
          id:"gallery",
          top:null,
          right:null,
          bottom:"nav",
          left:null
        }
      ],
      initialGrid:"nav"
    }

    return (
      <GridManager config={config}>
          {this.props.children}
      </GridManager>
    )
  }
});
