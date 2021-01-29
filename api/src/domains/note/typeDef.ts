import { gql } from 'apollo-server';

export default gql`
  type Note {
    title: String
    body: String
    dateCreated: String
    dateUpdated: String
  }

  input NoteInput {
    title: String
    body: String
  }
`;
