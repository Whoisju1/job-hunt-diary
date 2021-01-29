import { DocumentNode } from 'graphql/language';
import * as jobApplication from './jobApplication';
import * as company from './company';
import * as contact from './contact';
import * as note from './note';
import * as position from './position';
import * as user from './user';
import shared from './shared';
import root from './root';

export const typeDefs: DocumentNode[] = [
  shared,
  root,
  jobApplication.typeDef,
  company.typeDef,
  contact.typeDef,
  note.typeDef,
  position.typeDef,
  user.typeDef,
];
