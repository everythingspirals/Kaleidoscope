import React from 'react';
import Falcor from 'falcor';
import ShowList from 'common/show-list/show-list.jsx';
import Gallery from 'common/gallery/gallery.jsx';
import Title from 'common/title/title.jsx';
import model from 'models/shows-model.js';

export default React.createClass({
  getInitialState(){
    return {
      shows : {}
    }
  },

  componentWillMount() {
    this.getContent();
  },

  getContent() {
    model.get(['shows', {from: 0, to: 7}, ['title','poster']])
        .then(response => this.setState({shows: response.json.shows}))
  },

    render() {
      return (
        <div>
        <Title title="Highest Rated"/>
        <Gallery>
        <ShowList shows={this.state.shows}/>
        </Gallery>
      </div>
      )
    }
});
