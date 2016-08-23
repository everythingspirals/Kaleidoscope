import React from 'react';
import Falcor from 'falcor';
import ShowList from 'common/show-list/show-list.jsx';
import Gallery from 'common/gallery/gallery.jsx';
import Title from 'common/title/title.jsx';
import Guide from 'lib/guide';
import Toolbar from 'common/toolbar/toolbar';

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
        shows: guide.getCurrentShowsByRating()
      });
    })
  },

    render() {
      console.log(this.state.shows);
      return (
        <div>
        <Title title="Top Rated" cover="build/img/top_rated.jpg"/>

      <Gallery>
        <ShowList shows={this.state.shows}/>
        </Gallery>
      </div>
      )
    }
});
