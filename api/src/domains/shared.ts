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
  "When 'GetAll' is true 'limit' and 'start' are ignored and all the items are retrieved."
  operator: Operator
  getAll: Boolean
  value: String
}

enum Operator {
  eq,
  not_eq,
  gt,
  lt
}

enum Order {
  ASC
  DSC
}
`;
