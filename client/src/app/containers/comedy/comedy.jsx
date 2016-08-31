import React from 'react';
import ShowList from 'common/show-list/show-list.jsx';
import Gallery from 'common/gallery/gallery.jsx';
import Title from 'common/title/title.jsx';
import Guide from 'lib/guide';

export default React.createClass({
  getInitialState(){
    return {
      shows : [],
    }
  },

  componentWillMount() {
    this.getShows();
  },

  getShows() {
    let guide = new Guide();
    guide.init().then(()=>{
      this.setState({
        shows: guide.getShowsByGenre("Comedy")
      });
    })
  },

  render() {
      return (
        <div>
      <Gallery>
          <ShowList shows={this.state.shows}/>
        </Gallery>
      </div>
      )
    }
});
