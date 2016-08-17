# The Benefits of Fat-Client Architecture

![alt tag](https://github.com/everythingspirals/react-relay/blob/master/docs/diagram.jpg)
*This diagram represents the data flow of a fat-client architecture. In this diagram the API would serve several hours of guide data in a single response. This dataset would be parsed on the client, and would only need to be re-retreived at a set interval, such as every 30 minutes.* 

*One requests would trigger the cache to be primed, and would consitute a cache miss, however all subsequent requests would retreive data directly from the cache proxy, thus eliminating considerable latency.*

## Overview

Given then small and relatively-fixed size of the dataset, all data could be downloaded directly to the client from a cache proxy at a certain interval. This data could then be parsed on the client using standard Javascript functions such as Array.Filter, Array.Map, etc. 

## Benefits

1. Performance - Latency is avoided by removing the need for HTTP requests to the server.

2. Learning Curve - The technology stack would consist of only Javascript/ES6/React code, no other frameworks would have to be learnt/implemented.

3. Control/Flexibility - Writing the business logic in pure Javascript grants flexibility in dealing with platform specific edge cases.

4. Simplicity - Several hours of guide data could be retreived at a time, eliminating difficult edge cases that would have to be dealt with working with a RESTful API comprised of time-sensitive data.


## Disadvantages

1. Not Scalable - If the dataset increases to a size that is impractical to download to the client, this approach will no longer be applicable.


