import Grid from './grid';

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

  registerGrid(gridId, rowLength, nodeLength, domNode){
    this.getGridById(gridId).register(rowLength, nodeLength, domNode);
  }

  unregisterGrid(gridId){
    this.getGridById(gridId).unregister();
  }

  isRegistered(gridId){
    return this.getGridById(gridId).isRegistered();
  }
}
