import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    username: String
    email: String
    phone: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    phone: String
  }

  extend type Mutation {
    createUser(input: UserInput!): User!
  }

  extend type Query {
    getUser(id: ID!): User!
  }
`;