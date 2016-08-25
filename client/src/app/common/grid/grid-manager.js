import React from 'react';
import Grid from 'lib/grid';
import GridManager from 'lib/gridManager';
import store from 'redux/store';
import actionTypes from 'redux/actionTypes';

export default React.createClass({
  componentWillMount(){
    let gridManager = new GridManager();

    store.dispatch({
      type: actionTypes.GRID.UPDATE,
      gridManager: gridManager
    });
  },

  render() {
    return (
      <div >
        {this.props.children}
      </div>
    )
  }
});
