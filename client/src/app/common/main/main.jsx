import React from 'react';
import Header from 'common/header/header.jsx';

export default React.createClass({
    render() {
      return (
        <div>
          <Header/>  {this.props.children}


        </div>
      )
    }
});
