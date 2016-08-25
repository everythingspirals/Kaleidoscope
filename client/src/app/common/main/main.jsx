import React from 'react';
import Header from 'common/header/header.jsx';
import style from './main.css'
import GridManager from 'common/grid/grid-manager';

export default React.createClass({

  render() {
    return (
      <GridManager>
        <div>
          <Header/>
          {this.props.children}
        </div>
      </GridManager>
    )
  }
});
