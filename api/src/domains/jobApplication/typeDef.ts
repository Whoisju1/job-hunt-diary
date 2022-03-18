import { gql } from 'apollo-server';

export default gql`
  type JobApplication {
    id: ID!
    position: Position!
    company: Company!
    dateCreated: String!
    dateUpdated: String
    dateApplied: String
    jobPostingInfo: JobPostingInfo
    notes: [Note]
    status: Status!
    contacts: [Contact]
  }

  type JobPostingInfo {
    source: String
  }

  input JobApplicationInput {
    position: PositionInput
    company: CompanyInput
    dateApplied: String
    notes: [NoteInput]
    contacts: [ContactInput]
    status: String!
  }

  type Status {
    id: String!
    name: String!
    displayName: String!
  }

  type JobApplicationList implements IList {
    data: [JobApplication]!
    nextPageOffset: Int!
    moreAvailable: Boolean!
  }

  extend type Query {
    getJobApplications(listParams: ListParams): JobApplicationList!
    getJobApplication(id: ID!): JobApplication!
  }

  extend type Mutation {
    editJobApplication(jobApplication: JobApplicationInput!): JobApplication!
    addJobApplication(jobApplication: JobApplicationInput!): JobApplication!
  }
`;
