## Benefits of Relay

## Resources
Building and Deploying Relay with Facebook (Video) - https://www.youtube.com/watch?v=Pxdgu2XIAAg

## A Comparison to a RESTful API

Example ExpressJS RESTful API

'''javascript
var router = express.Router();             

router.get('/shows', function(req, res) {
    //shows = get shows somehow;
    res.send(shows);
});

router.get('/shows/:id', function(req, res) {
    //show = get show with id = id;
    res.send(show);
});

router.get('/shows_by_rating', function(req, res) {
    //shows = get shows sorted by rating somehow;
    res.send(shows);
});
'''

Disadvantages of REST

1. API must stay in sync with the view. If the view needs new data the API endpoint
it is tied to must be adjusted.

2. Potential for multiple roundtrips to the API per view.

3. Many endpoints required for each view, i.e /shows_by_rating, /shows_drama,
/shows_comedy, etc. Potential for duplication of data-fetching logic.
"Do you really want to write hundred of endpoints?"

4.

Benefits of Relay

1. Predictability - What data does my component need? Relay does the rest. (What data is in cache, what is missing, retry logic, etc).

2. Performant - Batching.

3. Incremental Rendering - Prioritize certain requests to resolve first. Divide data requests into chunks.

4. Caching - By tying data to components with reduce request redundancy by avoiding duplicate requests for data
in components that are shared between views. Smart caching in each component figures out what it has, and what it needs for that component, and fetches only the data it needs. Relay will build a custom query to fetch the missing data on the server.

5. After making POST/PUT requests, a response with changed/new data is returned and the cache is updated. Queries are built dynamically to only update the data that changed.

Benefits of GraphQL

'''javascript
query Query {  
  todos {
    id,
    title
  }
}
'''
1.
