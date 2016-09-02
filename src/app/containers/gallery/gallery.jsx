import React from 'react';
import Nav from 'common/nav/nav.jsx';
import ShowList from 'common/show-list/show-list.jsx';
import {Guide} from 'lib/guide/index.js';
import {connect} from 'react-redux';

const Gallery = React.createClass({

  getInitialState(){
    return {
      shows : [],
      genres : [
        {
          name: "Trending",
          href:"#/gallery/trending"
        },
        {
          name: "Comedy",
          href: "#/gallery/comedy"
        },
        {
          name: "Drama",
          href: "#/gallery/drama"
        },
        {
          name:"Sports",
          href:"#/gallery/sports"
        },
        {
          name: "Kids",
          href:"#/gallery/kids"
        }
      ]
    }
  },

  componentWillReceiveProps(nextProps){
    console.log("receiving props");
    this.getShows(nextProps.guide, nextProps.params.genre);
  },

  upperCaseFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  getShows(guide, genre) {
    genre = this.upperCaseFirst(genre);
    let shows = (genre === "Trending") ?
            guide.getShowsByRating() :
            guide.getShowsByGenre(genre);

    this.setState({
      shows : shows
    });
  },

componentDidMount(){ //for backspace
  let guide = this.props.guide;
  if(guide.currentShows){
    this.getShows(guide, this.props.params.genre);
  }
},

  render() {
    console.log("rendering");
      return (
        <div className="gallery">
          <ShowList shows={this.state.shows} length={this.state.shows.length}/>
          <Nav navItems={this.state.genres}></Nav>
        </div>
      )
  }
});

const stateToProps = (state)=>{
  return {
    guide : state.guide.guide
  }
}

export default connect(stateToProps)(Gallery);
