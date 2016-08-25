import React from 'react';
import style from './grid-node.css';
import {connect} from 'react-redux';

const GridNode = React.createClass({
  render() {
    const className = "grid-node " + (this.props.nodeId === this.props.grid.nodeIndex ? "active" : "")
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
});

const stateToProps = (state)=>{
  return {
    grid : state.grid.grid
  }
}

export default connect(stateToProps)(GridNode);
