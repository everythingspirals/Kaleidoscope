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
* To make content navigatable via remote control, use the **GridManager**, **Grid**, and **GridNode** components.  

* **GridNodes** are used to wrap links you want the user to be able to navigate between via remote control.

* A **Grid** represents a collection of GridNodes with a fixed row length and node count. 

* A **GridManager** represents a collection of **Grids**. It is responsible for managing their arrangement, as well as the position of the currently selected Grid and GridNode.

### GridManager

```Javascript
import React from 'react';
import style from './main.css'
import {GridManager} from 'lib/grid';

export default React.createClass({

  render() {

    let config = {
      routes:[
        {
          id: "gallery",
          grids:[
            {
              id:"nav",
              top:"show-list",
              right:null,
              bottom:null,
              left:null
            },
            {
              id:"show-list",
              top:null,
              right:null,
              bottom:"nav",
              left:null
            }
          ],
          initialGrid:"nav"
        },
        {
          id: "details/:id",
          grids: [
            {
              id:"details-nav",
              top:null,
              right:null,
              bottom:null,
              left:null
            }
          ],
          initialGrid:"details-nav"
        }
      ]
    };

    return (
      <GridManager config={config}>
          {this.props.children}
      </GridManager>
    )
  }
});
```
1. To begin, wrap the root element of your application with the GridManager tag. 

2. Next, pass in your config as a property. Your config should contain a list of all the routes that contain remote navigatable content. The route id should match the route path as defined in your React-Router config.

	```Javascript
	<Router history={hashHistory}>
	  <Route onEnter={init}>
	    <Route path="/" component={Main}>
	      <Route path="gallery" component={GalleryPage}/>
	      <Route path="details/:id" component={DetailsPage}/>
	    </Route>
	  </Route>
	</Router>
	```

3. For each route, list each grid, along with their orientation, and the intial grid you want the remote control to focus on. Grids are referenced by their id, which is a string.

### Grid

```Javascript
<Grid gridId="nav" nodeCount={this.props.navItems.length}>
  <ul>
    {this.props.navItems.map( (navItem,key) => {
      return (
       <li key={key}>
         <GridNode nodeId={key}>
           <a href={navItem.href} >{navItem.name}</a>
         </GridNode>
       </li>
    )})}
 </ul>
</Grid>

```
 The collection of GridNodes must be wrapped in a Grid component, which must be passed a gridId which links it to a grid defined in the config object previously given to GridManager. When defining a grid, you must also specify the length of the rows along with the total number of nodes.


###GridNode
```Javascript
 <GridNode nodeId={key}>
   <a href={navItem.href} >{navItem.name}</a>
 </GridNode>
```                     

Any link you want to be navigatable via remote must be wrapped in a GridNode component. This GridNode component must be passed an nodeId, and these nodeIds should be sequential.