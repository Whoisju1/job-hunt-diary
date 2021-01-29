import { gql } from 'apollo-server';

export default gql`
type Query {
  hello: String
}

type Mutation {
  Hello: String
}
`;
