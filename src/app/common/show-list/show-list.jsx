import React from 'react';
import ShowCard from 'common/show-card/show-card.jsx'
import style from './show-list.css';
import {Grid} from 'lib/grid';

export default React.createClass({
  render() {
    let show;
      return (
      <div className="show-list" >
        <Grid gridId="show-list" rowLength="4" nodeCount={this.props.shows.length}>
        {Object.keys(this.props.shows).map(key => {

          show = this.props.shows[key];
          return (
             <ShowCard rank={parseInt(key)} show={show}/>
           )}
          )}
        </Grid>
      </div>)
  }
});
