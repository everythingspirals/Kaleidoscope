import React from 'react';
import style from './gallery.css';

export default React.createClass({
    render() {
      return (
        <div className="gallery">
          {this.props.children}
        </div>
      )
    }
});
