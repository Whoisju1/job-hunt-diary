import * as company from './company';
import * as contact from './contact';
import * as jobApplication from './jobApplication';
import * as note from './note';
import * as position from './position';
import * as user from './user';

import { DocumentNode } from 'graphql/language';

import root from './root';
import shared from './shared';

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
