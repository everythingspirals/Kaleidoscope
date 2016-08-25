export default class Grid{

  constructor(nodeLength, rowLength){
    this.nodeLength = nodeLength;
    this.rowLength = rowLength;
    this.currentNode = 0;
    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;
  }

  setOrientation(top,right,bottom,left){
    this.setTop(top);
    this.setRight(right);
    this.setBottom(bottom);
    this.setLeft(left);
  }

  setTop(top){
    this.top = top;
  }

  setRight(right){
    this.right = right;
  }

  setBottom(bottom){
    this.bottom = bottom;
  }

  setLeft(left){
    this.left = left;
  }

  getCurrentNode(){
    return this.currentNode;
  }

  updateCurrentNode(keyCode){

    let currentNode = this.currentNode,
        rowLength = this.rowLength,
        nodeLength = this.nodeLength;

    switch(keyCode){

      case 13://enter
        location.hash = this.href;
        break;

      case 37://left
        if(currentNode > 0){
          this.currentNode--;
          if(nodeIndex == rowLength - 1){
            this.scrollToTop();
          }
        }
        break;

      case 38://up
        if(currentNode - rowLength >= 0){
          this.currentNode = nodeIndex - rowLength
          this.scrollToTop();
        }
        break;

      case 39://right
        if(currentNode < nodeLength - 1){
          this.currentNode++;
          if(nodeIndex == rowLength){
            this.scrollToBottom();
          }
        }
        break;

      case 40://down
        if(currentNode + rowLength <= nodeLength){
          this.currentNode = nodeIndex + rowLength
          this.scrollToBottom();
        }
        break;
    }
  }
}
