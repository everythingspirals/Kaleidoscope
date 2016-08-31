## Kaleidoscope
![alt tag](https://github.com/everythingspirals/kaleidoscope/blob/master/docs/screenshot.png)

## Overview

A prototype of the Personal View Mosaic application.

## Quick Start for Developers

### Install Core Dependencies
1. [install nodejs](http://nodejs.org/)

### Client Installation
1. Navigate to the client folder.
2. Install all Node Modules defined in package.json
    * npm install  
3. For development, run the npm dev task
    * npm run dev
4. To build, run the npm release task (this will create a /build folder)
    * npm run dist
5. To view build, run 'http-server' or 'npm run dev' and navigate to localhost:8080

### Server Installation 
1. Navigate to the server folder.
2. Install all Node Modules defined in package.json
    * npm install
3. Start server with the command 'node server'

### Browser

The dev process will open your default browser for you, give it a moment to auto-refresh once the build finishes.

[http://localhost:8080/](http://localhost:8080/)

## Remote Control

### Overview
To make content navigatable via remote control, use the GridManager, Grid, and GridNode components.  

A Grid represents a collection of nodes with a fixed row length and quantity. Each node in the grid is refered to as a GridNode. 

A GridManager represents a collection of grids and manages their arrangement, as well as the position of the currently selected Grid and GridNode.

### GridManager

```Javascript
import React from 'react';
import {GridManager} from 'lib/grid';

export default React.createClass({

  render() {

    let config = {
      grids:[
        {
          id:"nav",
          rowLength:3,
          nodeLength:3,
          top:null,
          right:null,
          bottom:"gallery",
          left:null
        },
        {
          id:"gallery",
          rowLength:3,
          nodeLength:6,
          top:"nav",
          right:null,
          bottom:null,
          left:null
        }
      ],
      initialGrid:"nav"
    }

    return (
      <GridManager config={config}>
          {this.props.children}
      </GridManager>
    )
  }
});
```
To begin, wrap the root element of your application with the GridManager tag. Pass in the list of your grids, along with their orientation, and the intial grid you want to remote control to focus on. Grids are referenced by their id, which is a string. When defining a grid, you must specify the length of the rows along with the total number of nodes.

### Grid & GridNode

```Javascript
import React from 'react';
import ShowCard from 'common/show-card/show-card.jsx'
import {Grid,GridNode} from 'lib/grid';

export default React.createClass({
  render() {
    let show, href;
    return (
    <div className="show-list" >
      <Grid gridId="gallery">
      {Object.keys(this.props.shows).map(key => {
        show = this.props.shows[key];
        return (
          <GridNode nodeId={key} key={key}>
           <ShowCard key={key} show={show}/>
          </GridNode>
         )}
      )}
    </Grid>
  </div>)
  }
});
```

Any link you want to be navigatable via remote must be wrapped in a GridNode component. This GridNode component must be passed an nodeId, and these nodeIds should be sequential. The collection of GridNodes must be wrapped in a Grid component, which must be passed a gridId which links it to a grid defined in the config object previously given to GridManager.


