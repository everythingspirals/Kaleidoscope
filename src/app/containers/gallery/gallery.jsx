import React from 'react';
import Nav from 'common/nav/nav.jsx';
import ShowList from 'common/show-list/show-list.jsx';
import Guide from 'lib/guide';


export default React.createClass({
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

  upperCaseFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  getShows() {
    let genre = this.props.params.genre ?
                this.upperCaseFirst(this.props.params.genre) :
                "Trending";

    let guide = new Guide();

    guide.init().then(()=>{
      this.setState({
        shows: genre == "Trending" ?
                        guide.getShowsByRating() :
                        guide.getShowsByGenre(genre)
      });
    });
  },

  render() {
    this.getShows();
    return (
    <div className="gallery">
      <ShowList shows={this.state.shows}/>
      <Nav navItems={this.state.genres}></Nav>
    </div>
    )
  }
});
