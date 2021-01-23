import { gql } from 'apollo-server';

export default gql`
  type Book {
    id: ID!
    author: String
    title: String
  }

  type Query {
    books: [Book]
  }
`;
