import React from 'react';
import Show from 'common/show/show.jsx'
import style from './show-list.css';

export default React.createClass({
    render() {
      let show;

      return (
        <div className="shows-list">
          {Object.keys(this.props.shows).map(key => {
            show = this.props.shows[key];
            return (
              <div key={key} className="show">
                <Show src={show.poster}/>
              </div>
            )
          })}
        </div>
      )
    }
});
