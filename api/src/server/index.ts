import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../domains';

export const server = new ApolloServer({
  mocks: true,
  typeDefs,
});
