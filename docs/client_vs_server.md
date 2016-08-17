# The Benefits of Fat-Client Archetecture

![alt tag](https://raw.githubusercontent.com/everythingspirals/react-relay/docs/master/diagram.jpg)

## Client-side Logic

#### Overview

Given then small and relatively-fixed size of the dataset, all data could be downloaded directly to the client from a cache proxy at a certain interval. This data could then be parsed on the client using standard Javascript functions such as Array.Filter, Array.Map, etc. 

#### Benefits

1. Performance - Latency is avoided by removing the need for HTTP requests to the server.

2. Simplicity - The technology stack would consist of only Javascript/ES6/React code, no other frameworks would have to be learnt/implemented.

3. Control/Flexibility - Writing the business logic in pure Javascript grants flexibility in dealing with platform specific edge cases.

#### Disadvantages

1. Not Scalable - If the dataset increases to a size that is impractical to download to the client, this approach will no longer be applicable.

2. No seperation of concerns - Storing the business logic as a library 



