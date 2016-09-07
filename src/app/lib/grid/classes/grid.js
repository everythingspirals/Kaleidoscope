export default class Grid{

  //Constructor
  //----------------------------------------------------------------------------
  constructor(id, route){
    this.id = id;
    this.route = route;
    this.nodeCount = null;
    this.rowLength = null;
    this.currentNode = 0;
    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;
    this.domNode = null;
  }

  //Getters
  //----------------------------------------------------------------------------
  getId(){
    return this.id;
  }

  getTop(){
    return this.top;
  }

  getRight(){
    return this.right;
  }

  getBottom(){
    return this.bottom;
  }

  getLeft(){
    return this.left;
  }

  getRowLength(){
    return this.rowLength;
  }

  getNodeCount(){
    return this.nodeCount;
  }

  getCurrentNode(){
    return this.currentNode;
  }

  //Setters
  //----------------------------------------------------------------------------
  setOrientation(top,right,bottom,left){
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }

  setSize(rowLength, nodeCount){
    this.setRowLength(rowLength);
    this.setNodeCount(nodeCount);
  }

  setNodeCount(nodeCount){
    this.nodeCount = parseInt(nodeCount);
  }

  setRowLength(rowLength){
    this.rowLength = parseInt(rowLength);
  }

  setCurrentNode(node){
    this.currentNode = node;
  }

  setDomNode(domNode){
    this.domNode = domNode;
  }

  unsetDomNode(){
    this.domNode = null;
  }

  //Navigation
  //------------------------------------------------------------------------------
  navigate(){
      let node = this.domNode.querySelector(".grid-node-"+this.currentNode);
      let href = node.querySelector("a").href;
      location.href = href;
  }
}
