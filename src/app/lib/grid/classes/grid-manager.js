import store from 'redux/store';
import actionTypes from 'redux/actionTypes';

import Grid from './grid';
import Route from './route';

export default class GridManager{

  //Constructor
  //----------------------------------------------------------------------------
  constructor(config){
    this.routes = [];
    this.grids = [];
    this.currentRoute = null;
    this.init(config);
  }

  //Initialization
  //----------------------------------------------------------------------------
  init(config){
    let newRoute, newGrid;

    config.routes.forEach(route =>{
      newRoute = new Route(route.id, route.initialGrid);
      this.routes.push(newRoute);

      route.grids.forEach(grid => {
        newGrid = new Grid(grid.id, route.id);
        newGrid.setOrientation(grid.top,grid.right,grid.bottom,grid.left);
        this.grids.push(newGrid);
      });
    });
  }

  //KeyPress
  //----------------------------------------------------------------------------
  handleKeypress(keyCode){
    let currentGrid = this.getCurrentGrid(),
        currentNode = this.getCurrentNode(),
        rowLength = currentGrid.getRowLength(),
        nodeCount = currentGrid.getNodeCount(),
        top = currentGrid.getTop(),
        right = currentGrid.getRight(),
        bottom = currentGrid.getBottom(),
        left = currentGrid.getLeft();

    switch(keyCode){
      case 13://return
          currentGrid.navigate();
        break;

      case 37://left
        if(currentNode > 0){
          this.setCurrentNode(currentNode - 1);
        }
        break;

      case 38://up
        if(rowLength && (currentNode - rowLength >= 0)){
          this.setCurrentNode(currentNode - rowLength);
        }else if(top != null){
          this.changeGrid(top);
        }
        break;

      case 39://right
        if(currentNode < nodeCount - 1){
          this.setCurrentNode(currentNode + 1);
        }
        break;

      case 40://down
        if(rowLength && (currentNode + rowLength <= nodeCount - 1)){
          this.setCurrentNode(currentNode + rowLength);
        }else if(bottom != null){
          this.changeGrid(bottom);
        }
        break;
    }
  }

  //Grid
  //----------------------------------------------------------------------------
  getRouteById(id){
    let i, route;

    for(i = 0; i < this.routes.length; i++){
      route = this.routes[i];

      if(route.id === id){
        return route;
      }
    }
  }

  setCurrentRoute(route){
    this.currentRoute = route;
  }

  getCurrentRoute(){
    return this.getRouteById(this.currentRoute);
  }

  //Grid
  //----------------------------------------------------------------------------
  getGridById(id){
    let i, grid;

    for(i = 0; i < this.grids.length; i++){
      grid = this.grids[i];

      if(grid.id === id){
        return grid;
      }
    }
  }

  getCurrentGrid(){
    let currentRoute = this.getCurrentRoute(),
        currentGrid = currentRoute.getCurrentGrid();
    return this.getGridById(currentGrid);
  }

  changeGrid(gridId){
    this.setCurrentGrid(gridId);
    this.setCurrentNode(0);
  }

  setCurrentGrid(gridId){
    this.getCurrentRoute().setCurrentGrid(gridId);
  }

  setGridSize(gridId, rowLength, nodeCount){
    this.getGridById(gridId).setSize(rowLength, nodeCount);
  }

  setDomNode(gridId, domNode){
    this.getGridById(gridId).setDomNode(domNode);
  }

  unsetDomNode(gridId){
    this.getGridById(gridId).unsetDomNode();
  }

  //Node
  //----------------------------------------------------------------------------
  getCurrentNode(){
    return this.getCurrentGrid().getCurrentNode();
  }

  setCurrentNode(node){
    this.getCurrentGrid().setCurrentNode(node);
  }

  //Update
  //----------------------------------------------------------------------------
  update(){
    store.dispatch({
      type: actionTypes.GRID.UPDATE,
      gridManager: this
    });
  }
}
