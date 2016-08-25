import React from 'react';
import GridNode from 'common/grid/grid-node';
import Grid from 'lib/grid';
import {connect} from 'react-redux';

const GridComponent = React.createClass({
  getInitialState(){
    return {
      gridIndex: 0
    }
  },

  onKeydown(e){
    e.preventDefault();
    let gridManager = this.props.gridManager;
    grid.updateNodeIndex(this.state.gridIndex, e.keyCode);

    store.dispatch({
      type: actionTypes.GRID.UPDATE,
      gridManager: gridManager
    });
  },

  componentWillMount(){
    let gridManager = this.props.gridManager;
    gridManager.addGrid("gallery", 8, 4);
  },

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeydown)
  },

  componentDidMount(){
    window.addEventListener('keydown', this.onKeydown);
  },

  render() {
    return (<div>{this.props.children}</div>);
  }
});

const stateToProps = (state)=>{
  return {
    gridManager : state.grid.gridManager
  }
}

export default connect(stateToProps)(GridComponent);
