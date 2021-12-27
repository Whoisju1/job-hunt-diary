import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    username: String
    email: String
    phone: String
    updatedAt: String
    createdAt: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    email: String!
    phone: String
  }

  extend type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(id: ID!): Boolean!
  }

  extend type Query {
    getUser(id: ID!): User!
  }
`;
