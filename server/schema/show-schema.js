// Data
import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const Show = new GraphQLObjectType({
  name: 'Show',
  description: 'This represents a TV show',
  fields: {
    id: {
      type: GraphQLString,
      resolve(show){
        return show.id
      }
    },
    title: {
      type: GraphQLString,
      resolve(show){
        return show.Title
      }
    },
    poster: {
      type: GraphQLString,
      resolve(show){
        return show.Poster
      }
    },
  }
});
