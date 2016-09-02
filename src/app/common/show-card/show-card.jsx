import React from 'react';
import ShowPreview from 'common/show-preview/show-preview.jsx';
import style from './show-card.css';

export default React.createClass({

    render() {
      let show = this.props.show,
          href = "#/details/" + this.props.show.id,
          poster = {
            backgroundImage:"url(" + show.Poster + ")"
          };
      return (
        <div className="show-card card" onClick={this.getDetails}>
          <a href={href}>
            <div className="show-poster" style={poster}></div>
            <div className="show-description">
              <div className="show-rank">{this.props.rank}</div>
              <img className="show-channel" src={show.ChannelLogo}/>
              <div className="show-title">{show.Title}</div>
            </div>
          </a>
        </div>
      )
    }
});
