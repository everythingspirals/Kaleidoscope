import Grid from './grid';

export default class Route{

  //Constructor
  //----------------------------------------------------------------------------
  constructor(id, initialGrid){
    this.id = id;
    this.initialGrid = initialGrid;
    this.currentGrid = initialGrid;
  }

  //Grid
  //----------------------------------------------------------------------------
  getCurrentGrid(){
    return this.currentGrid;
  }

  setCurrentGrid(grid){
    this.currentGrid = grid;
  }
}
