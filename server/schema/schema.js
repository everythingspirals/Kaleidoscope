// Data
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList
} from 'graphql';

import {Show} from './show-schema';
import {getShows} from '../data/database';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    show: {
      type: new GraphQLList(Show),
      args: {
        id : {
          type: GraphQLString
        }
      },
      resolve(_,args){
        return getShows(args.id);
      }
    }
  }
});

export const Schema = new GraphQLSchema({
  query: Query
});
