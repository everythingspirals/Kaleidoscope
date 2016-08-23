import React from 'react';
import ShowCard from 'common/show-card/show-card.jsx'
import style from './show-list.css';

export default React.createClass({
  render() {
    let show;
    return (
    <div className="shows-list" >
      {Object.keys(this.props.shows).map(key => {
        show = this.props.shows[key];
       return (
           <ShowCard key={key} show={show}/>
       )
     })}
   </div>
    )
  }
});
