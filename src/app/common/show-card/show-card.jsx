import React from 'react';
import style from './show-card.css';
import ShowPreview from 'common/show-preview/show-preview';
import {GridNode} from 'lib/grid';

export default React.createClass({
    render() {
      let show = this.props.show,
          href = "#/details/" + this.props.show.id;
      return (
        <GridNode nodeId={this.props.rank}>
          <div className="show-card card" onClick={this.getDetails}>
            <a href={href}>
              <ShowPreview src={show.Preview}></ShowPreview>
            </a>
            <div className="show-description">
              <div className="show-title">{show.Title}</div>
            </div>
          </div>
        </GridNode>
      )
    }
});
