import { gql } from 'apollo-server';

export default gql`
  type Contact {
    id: ID!
    firstName: String
    lastName: String
    alias: String
    phone: String
    email: String
    note: Note
    jobApplication: JobApplication
    dateCreated: String
    dateUpdated: String
  }

  input ContactInput {
    firstName: String
    lastName: String
    alias: String
    phone: String
    email: String
    note: NoteInput
  }
`;
