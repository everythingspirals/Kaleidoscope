import React from 'react';
import GridManager from '../classes/grid-manager.js';

export default React.createClass({

  componentWillReceiveProps(nextProps){
    let route = nextProps.children.props.route.path;
    this.gridManager.setCurrentRoute(route);
  },

  componentWillMount(){
    let route = this.props.children.props.route.path;
    this.gridManager = new GridManager(this.props.config);
    this.gridManager.setCurrentRoute(route);
    this.update();
  },

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeydown)
  },

  componentDidMount(){
    window.addEventListener('keydown', this.onKeydown);
  },

  onKeydown(e){
    e.preventDefault();
    this.gridManager.handleKeypress(e.keyCode);
    this.update();
  },

  update(){
    this.gridManager.update();
  },

  render() {
    return (
      <div className="remote-handler">
        {this.props.children}
      </div>
    )
  }
});
