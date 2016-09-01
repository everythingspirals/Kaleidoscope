import React from 'react';
import {connect} from 'react-redux';

const GridNode = React.createClass({
  render() {
    let currentNode = this.props.gridManager.getCurrentNode(),
        nodeId = parseInt(this.props.nodeId),
        active = nodeId === currentNode ? " active" : "",
        className = "grid-node grid-node-" + this.props.nodeId + active;

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
});

const stateToProps = (state)=>{
  return {
    gridManager : state.grid.gridManager,
    update: Math.random() //hack
  }
}

export default connect(stateToProps)(GridNode);
