import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import Grid from '../grid';

const GridComponent = React.createClass({

  getInitialState(){
    return {
      className: "grid",
      rowLength: 0,
      nodeCount: 0
    }
  },

  componentWillReceiveProps(nextProps){
    let gridManager = nextProps.gridManager,
        gridId = nextProps.gridId,
        rowLength = nextProps.rowLength,
        nodeCount = nextProps.nodeCount,
        activeId = gridManager.getCurrentGrid().id;

    this.setActive(activeId, gridId);

    if(rowLength !== this.state.rowLength ||
       nodeCount !== this.state.nodeCount){

      this.setState({
        rowLength: rowLength,
        nodeCount: nodeCount
      });

      gridManager.setGridSize(gridId, rowLength, nodeCount);
    }
  },

  setActive(activeId, gridId){
    this.setState({
      className : "grid " + (activeId === gridId ? "active" : "")
    })
  },

  componentDidMount: function() {
    this.props.gridManager.registerGrid(
        this.props.gridId,
        ReactDom.findDOMNode(this.refs.grid)
    );
 },

  componentWillUnmount(){
    this.props.gridManager.unregisterGrid(this.props.gridId);
  },

  render() {
    return (
      <div className={this.state.className} ref="grid">
        {this.props.children}
      </div>
    );
  }
});

const stateToProps = (state)=>{
  return {
    gridManager : state.grid.gridManager,
    update: Math.random() //hack
  }
}

export default connect(stateToProps)(GridComponent);
