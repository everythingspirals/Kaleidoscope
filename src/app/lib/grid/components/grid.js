import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

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
        activeId = gridManager.getCurrentGrid().id,
        nodeCount = nextProps.nodeCount,
        rowLength = nextProps.rowLength;

        this.setActive(gridId,activeId);
        this.setSize(gridId,rowLength,nodeCount);
  },

  componentWillMount(){
    console.log("Mounting");
    let gridManager = this.props.gridManager,
        gridId = this.props.gridId,
        rowLength = this.props.rowLength,
        nodeCount = this.props.nodeCount,
        currentGrid = gridManager.getCurrentGrid(),
        activeId = currentGrid.id;

        this.setActive(gridId,activeId);
        this.setSize(gridId,rowLength,nodeCount);
  },

  setSize(gridId, rowLength, nodeCount){
    this.props.gridManager.setGridSize(gridId, rowLength, nodeCount);

    this.setState({
     rowLength: rowLength,
     nodeCount: nodeCount
    });
  },

  setActive(activeId, gridId){
    this.setState({
      className : "grid " + (activeId === gridId ? "active" : "")
    })
  },

  componentDidMount: function() {
    let gridId = this.props.gridId,
        domNode = ReactDom.findDOMNode(this.refs.grid);

    this.props.gridManager.setDomNode(gridId,domNode);
 },

  componentWillUnmount(){
    this.props.gridManager.unsetDomNode(this.props.gridId);
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
