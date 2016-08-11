import React from 'react';
import style from './show.css';

export default React.createClass({
    render() {
      return (
        <div className="show card">
            <img data-src="holder.js/100px280/thumb" alt="100%x280" src={this.props.src} data-holder-rendered="true"/>
        </div>
      )
    }
});
