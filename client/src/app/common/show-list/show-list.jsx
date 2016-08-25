import React from 'react';
import ShowCard from 'common/show-card/show-card.jsx'
import style from './show-list.css';
import Grid from 'common/grid/grid.js';
import GridNode from 'common/grid/grid-node';

export default React.createClass({
  render() {
    let show;
    return (
    <div className="show-list" >
      <Grid gridLength="6" rowLength="3">
      {Object.keys(this.props.shows).map(key => {
        show = this.props.shows[key];
        return (
          <GridNode nodeId={key} key={key}>
           <ShowCard key={key} show={show}/>
          </GridNode>
         )}
      )}
    </Grid>
  </div>)
  }
});
