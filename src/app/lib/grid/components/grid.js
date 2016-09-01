import React from 'react';
import ReactDom from 'react-dom';
import Grid from '../grid';
import {connect} from 'react-redux';

const GridComponent = React.createClass({
  componentDidMount(){
    const domNode = ReactDom.findDOMNode(this.refs.grid);
    this.props.gridManager.registerGrid(this.props.gridId,
                                        this.props.rowLength,
                                        this.props.nodeCount,
                                        domNode);
  },

  componentWillUnmount(){
    this.props.gridManager.unregisterGrid(this.props.gridId);
  },

  render() {
    let currentGridId = this.props.gridManager.getCurrentGrid().id,
        active = currentGridId === this.props.gridId ? "active" : "",
        className = "grid " + active;

    return (
      <div className={className} ref="grid">
        {this.props.children}
      </div>);
  }
});

const stateToProps = (state)=>{
  return {
    gridManager : state.grid.gridManager,
    update: Math.random() //hack
  }
}

export default connect(stateToProps)(GridComponent);
