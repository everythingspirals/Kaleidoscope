import React from 'react';
import Guide from 'lib/guide';
import ShowPreview from 'common/show-preview/show-preview.jsx';
import style from './fullscreen.css';

export default React.createClass({
  getInitialState(){
    return {
      show : {},
    }
  },

  componentDidMount() {
    this.getShow();
  },

  getShow() {
    let guide = new Guide();
    guide.init().then(()=>{
      this.setState({
        show: guide.getShow(this.props.params.id)
      });
    })
  },

  render() {
    let show = this.state.show;

      return (
      <div id="fullscreen">
        <ShowPreview id={show.id} src={show.Preview}/>
      </div>

      )
    }
});
