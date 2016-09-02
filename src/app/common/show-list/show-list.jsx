import React from 'react';
import ShowCard from 'common/show-card/show-card.jsx'
import style from './show-list.css';
import {Grid,GridNode} from 'lib/grid';

export default React.createClass({
  componentWillMount(){

  },
  render() {
    let show;
    return (
    <div className="show-list" >
      <Grid gridId="gallery" rowLength="3" nodeCount={this.props.length}>
      {Object.keys(this.props.shows).map(key => {
        show = this.props.shows[key];
        return (
          <GridNode nodeId={key} key={key}>
           <ShowCard rank={parseInt(key) + 1} show={show}/>
          </GridNode>
         )}
        )}
      </Grid>
    </div>)
  }
});
