import { ApolloServer } from 'apollo-server';
import typeDefs from '../typeDefs';

export const server = new ApolloServer({
  typeDefs,
  mocks: true
});
