import { gql } from 'apollo-server';

export default gql`
  type Company {
    id: ID!
    name: String
    location: String
    notes: [Note]
    phone: String
    email: String
    insideContact: [Contact]
  }

  input CompanyInput {
    name: String!
    location: String
    notes: [NoteInput]
    phone: String
    email: String
    insideContact: [ContactInput]
  }

  type CompanyList implements IList {
    data: [Company]!
    nextPageOffset: Int!
    moreAvailable: Boolean!
  }

  extend type Query {
    getCompanies(params: ListParams): CompanyList!
  }
`;
