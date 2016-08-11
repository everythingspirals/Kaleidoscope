// Libraries
import GraphqlHTTP from 'express-graphql';
import Express from 'express';
import {Schema} from './schema/schema.js';

Express()
  .use('/graphql', GraphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
  }))
  .listen(1337);

console.log('GraphQL server running on http://localhost:3000/graphql');
