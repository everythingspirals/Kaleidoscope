import React from 'react';
import style from './show-preview.css';

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
    return (<video ref="video" className="show-preview" src={this.props.src} autoplay muted></video>)
  }
});
