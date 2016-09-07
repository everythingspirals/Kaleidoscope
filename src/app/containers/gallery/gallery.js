import React from 'react';
import Nav from 'common/nav/nav.jsx';

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

  render() {
    return (
      <div className="gallery">
        {this.props.children}
        <Nav gridId="nav" navItems={this.state.genres}></Nav>
      </div>
    )
  }
});
