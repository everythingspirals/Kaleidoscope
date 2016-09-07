import React from 'react';
import Nav from 'common/nav/nav.jsx';
import ShowList from 'common/show-list/show-list.jsx';
import {connect} from 'react-redux';

const Comedy = React.createClass({

  getInitialState(){
    return {
      shows: []
    }
  },

  componentWillMount(){
    this.getShows(this.props.guide);
  },

  componentWillReceiveProps(nextProps){
    this.getShows(nextProps.guide);
  },

  getShows(guide) {
    if(guide.currentShows){
      let shows = guide.getShowsByGenre("Comedy");

      this.setState({
        shows : shows
      });
    }
  },

  render() {
    return (
      <ShowList shows={this.state.shows}/>
    )
  }
});

const stateToProps = (state)=>{

  return {
    guide : state.guide.guide
  }
}

export default connect(stateToProps)(Comedy);
