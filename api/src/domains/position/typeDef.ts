import { gql } from 'apollo-server';

export default gql`
  type Position {
    id: ID!
    name: String
    company: String
    notes: [Note]
    requirements: [String]
    jobApplication: JobApplication
    compensation: String
    rating: Float
    benefits: String
  }

  input PositionInput {
    name: String
    notes: [NoteInput]
    stage: String
    requirements: [String]
  }
`;
