import React from 'react';
import titleStyle from './title.css';

export default React.createClass({
    render() {
      return (
        <section className="jumbotron text-xs-center title">
           <div className="container">
             <h1 className="display-3">{this.props.title}</h1>
           </div>
         </section>
      )
    }
});
