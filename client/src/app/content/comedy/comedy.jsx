import React from 'react';
import ShowList from 'common/show-list/show-list.jsx';
import Gallery from 'common/gallery/gallery.jsx';
import Title from 'common/title/title.jsx';

export default React.createClass({
  render() {
      return (
        <div>
        <Title title="Comedy"/>
        <Gallery>
        <ShowList shows={this.props.shows}/>
        </Gallery>
      </div>
      )
    }
});
