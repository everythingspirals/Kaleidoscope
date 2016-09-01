import React from 'react';
import Grid from '../grid';
import GridManager from '../grid-manager';
import store from 'redux/store';
import actionTypes from 'redux/actionTypes';

export default React.createClass({

  componentWillMount(){
    let config = this.props.config,
        gridManager = new GridManager(),
        grid = null;

    config.grids.forEach(config => {
      grid = new Grid(config.id, config.nodeLength, config.rowLength);
      grid.setOrientation(config.top,config.right,config.bottom,config.left);
      gridManager.addGrid(grid);
    });

    gridManager.setCurrentGrid(config.initialGrid ||
                               gridManager.getGridByIndex(0).getId());

    this.gridManager = gridManager;
    this.update();
  },

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeydown)
  },

  componentDidMount(){
    window.addEventListener('keydown', this.onKeydown);
  },

  onKeydown(e){
    e.preventDefault();
    this.gridManager.updateCurrentNode(e.keyCode);
    this.update();
  },

  update(){
    store.dispatch({
      type: actionTypes.GRID.UPDATE,
      gridManager: this.gridManager
    });
  },

  render() {
    return (
      <div className="grid-manager">
        {this.props.children}
      </div>
    )
  }
});
