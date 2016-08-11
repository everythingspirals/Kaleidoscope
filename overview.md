# Overview of GraphQL and Relay
Benefits and Disadvantages in Comparison to a Traditional REST API  



![alt tag](https://raw.githubusercontent.com/everythingspirals/react-relay/master/overview.jpg)



## Resources

1.  [Initial Impressions of Relay and GraphQL (Blog)](https://kadira.io/blog/graphql/initial-impression-on-relay-and-graphql)
2. [Building and Deploying Relay with Facebook (Video)](https://www.youtube.com/watch?v=Pxdgu2XIAAg)
3. [Build a GraphQL server for Node.js, using PostgreSQL/MySQL (Video)](https://www.youtube.com/watch?v=DNPVqK_woRQ)
4. [GraphQL Official Documentation](http://graphql.org/docs/getting-started/)
5. [Relay Official Documentation](https://facebook.github.io/relay/)

## What is a RESTful API?

####Example

```javascript
var router = express.Router();             

router.get('/shows', function(req, res) {
    shows = getShows();
    res.send(shows);
});

router.get('/shows/:id', function(req, res) {
    show = getShows(req.id)
    res.send(show);
});
```
#### Benefits

1. Proven - RESTful APIs are are tried and true paradigm for the last 5+ years.

2. Learning curve - small .

3. Control - Because RESTful APIs are so low-level, it may be easy to solve complicated bugs that would
	be otherwise difficult to solve in a more high-level framework.

#### Disadvantages

1. Maintainence - API must stay in sync with the view. If the view needs new data the API endpoint
it is tied to must be adjusted.

	For example, let's say a new page needs to be built that shows all shows sorted by rating.
	Now the API developer must add a new route:

	```javascript
	router.get('/shows_by_rating', function(req, res) {
	    shows = getShows.sort("rating");
	    res.send(shows);
	});
	```

2. Latency - Potential for multiple roundtrips to the API per view.

3. Complexity - Many endpoints required for each view, i.e /shows_by_rating, /shows_drama,
/shows_comedy, etc. Potential for duplication of data-fetching logic.
"Do you really want to write hundred of endpoints?"

## What is GraphQL?
GraphQL is an abstraction layer developed by Facebook that exists between the datasource (database, json, etc) and the client application. It provides a standardized and simplistic query language for the client application to use.

#### Example
```javascript
 shows {
    title,
    poster,
    cast {
      firstName,
      lastName,
    }
  }
```

#### Benefits

1. Syntax - Simple and elegant query language.

2. Database agnostic - Allows developers to shift database-specific logic into high level abstraction. In other words, more Javascript, less SQL/Mongodb/etc.

3. Less code - Ability to construct dynamic queries without having to build RESTful endpoints around them, fully replaces the need for a RESTful API.
	>"With GraphQL, a client-side developer can write a query against a GraphQL server and fetch data. Let's say that in a different version of the app, that developer wants more information. With GraphQL, they simply change the GraphQL query and get the data they need. They never need to ask the server-side developer to create a custom data endpoint."
4. Bandwidth - Allows developers to easily request only the data that they need, thus reducing bandwidth requirements.

#### Disadvantages

1. Server-side caching - Dynamic Queries may disrupt certain caching systems, i.e if some queries ask for one field, and some ask for another this may lead to an increase in cache misses.


## What is Relay?

Relay is a Javascript framework developed by Facebook that allows assists the client application to communicate with a GraphQL server. It connects directly with ReactJS components.

#### Example
```Javascript
class Show extends React.Component {
  render() {
    var {title, poster} = this.props.show;
    return (
     <div>{title}</div>
     <img src={poster}/>
    );
  }
}

Show = Relay.createContainer(Show, {
  fragments: {
    show: () => Relay.QL`
      fragment on Show {
        title,
        poster,
      }
    `,
  },
});
```

#### Benefits

1. Predictability - What data does my component need? Relay does the rest. (What data is in cache, what is missing, sorting, array length, pagination, retry logic, etc).

2. Performant - Batching.

3. Incremental Rendering - Prioritize certain requests to resolve first. Divide data requests into chunks.

4. Caching - By tying data to components with reduce request redundancy by avoiding duplicate requests for data
in components that are shared between views. Smart caching in each component figures out what it has, and what it needs for that component, and fetches only the data it needs. Relay will build a custom query to fetch the missing data on the server.

5. Optimistic updates - (simulate mutation in the client, so the user doesn't need to wait for the server result to see the change they made)." After making POST/PUT requests, a response with changed/new data is returned and the cache is updated. Queries are built dynamically to only update the data that changed.
