import React from 'react';
import titleStyle from './title.css';

export default React.createClass({
    render() {
      let style = {
        backgroundImage: 'url(' + this.props.cover + ')'
      };
      return (
        <section className="title">
          <div className="title-cover" style={style}/>
          <div className="title-text">{this.props.title}</div>
         </section>
      )
    }
});
