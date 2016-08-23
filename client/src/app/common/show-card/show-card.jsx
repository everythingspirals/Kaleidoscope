import React from 'react';
import style from './show-card.css';
import ShowPreview from 'common/show-preview/show-preview.jsx';

export default React.createClass({
    getDetails(id){
      location.hash = "details/" + this.props.show.id;
    },
    render() {
      let show = this.props.show;

      return (
        <div className="show-card card" onClick={this.getDetails}>
          <ShowPreview id={show.id} src={show.Preview}/>
          <div className="card-block">
            <h4 className="card-title">{show.Title}</h4>
            <p className="card-text">{show.Channel}</p>
          </div>
        </div>
      )
    }
});
