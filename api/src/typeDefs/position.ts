import { gql } from 'apollo-server';

export default gql`
  type Position {
    id: ID!
    name: String
    company: String
    notes: [Note]
    stage: String
    requirements: [String]
    jobApplication: JobApplication
  }

  input PositionInput {
    name: String
    notes: [NoteInput]
    stage: String
    requirements: [String]
  }
`;
