import Grid from './grid';

export default class GridManager{

  constructor(){
    this.grids = [];
    this.currentGrid = 0;
  }

  addGrid(Grid grid){
    this.grids.push(grid);
  }

  getCurrentGrid(){
    return this.grids[this.gridIndex]
  }

  getCurrentNode(){
    return this.getCurrentGrid().getCurrentNode();
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }

  scrollToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
}
