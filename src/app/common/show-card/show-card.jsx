import React from 'react';
import ShowPreview from 'common/show-preview/show-preview.jsx';
import style from './show-card.css';
import {GridNode} from 'lib/grid';
export default React.createClass({
    componentDidMount(){
      this.play();
    },
    componentWillMount(){
      this.play();
    },
    componentWillReceiveProps(){
      this.play();
    },
    play(){
      if(this.refs.video){
        this.refs.video.play();
      }
    },
    render() {
      this.play();
      let show = this.props.show,
          href = "#/details/" + this.props.show.id;
      return (
        <GridNode nodeId={this.props.rank}>
          <div className="show-card card" onClick={this.getDetails}>
            <a href={href}>
              <video ref="video" className="show-preview" src={show.Preview} autoplay></video>
            </a>
            <div className="show-description">
              <div className="show-title">{show.Title}</div>
            </div>
          </div>
        </GridNode>
      )
    }
});
