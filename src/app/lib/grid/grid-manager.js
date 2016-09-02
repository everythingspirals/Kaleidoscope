import Grid from './grid';
import store from 'redux/store';
import actionTypes from 'redux/actionTypes';

export default class GridManager{

  constructor(){
    this.grids = [];
    this.currentGrid = null;
  }

  addGrid(grid){
    this.grids.push(grid);
    grid.setGridManager(this);
    this.currentGrid = grid.gridId;
  }

  getCurrentGrid(){
    return this.getGridById(this.currentGrid);
  }

  setCurrentGrid(grid){
    this.currentGrid = grid;
  }

  getCurrentNode(){
    return this.getCurrentGrid().getCurrentNode();
  }

  getGridByIndex(index){
    return this.grids[index];
  }

  getGridById(id){
    let i, grid;

    for(i = 0; i < this.grids.length; i++){
      grid = this.grids[i];

      if(grid.id === id){
        return grid;
      }
    }
  }

  updateCurrentNode(keyCode){
    this.getCurrentGrid().updateCurrentNode(keyCode);
  }

  registerGrid(gridId, domNode){
    this.getGridById(gridId).register(domNode);
  }

  setGridSize(gridId, rowLength, nodeCount){
    this.getGridById(gridId).setSize(rowLength, nodeCount);
  }

  unregisterGrid(gridId){
    this.getGridById(gridId).unregister();
  }

  isRegistered(gridId){
    return this.getGridById(gridId).isRegistered();
  }

  update(){
    store.dispatch({
      type: actionTypes.GRID.UPDATE,
      gridManager: this
    });
  }
}
