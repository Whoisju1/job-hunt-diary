import { gql } from 'apollo-server';

export default gql`
interface IList {
  nextPageOffset: Int!
  moreAvailable: Boolean!
}

input ListParams {
  field: String!
  order: Order = ASC
  limit: Int
  start: Int = 0
  getAll: Boolean
}

enum Order {
  ASC
  DSC
}
`;