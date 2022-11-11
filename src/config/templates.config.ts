import { vocabs } from './vocabs.config';

const { modifierClause, noun, predicate } = vocabs;

export const templates: string[][][] = [
  [
    noun[4],
    ['の'],
    noun[3],
    predicate[4],
    modifierClause[5],
    modifierClause[4],
    noun[2],
    predicate[6],
    noun[2],
  ],
  [
    modifierClause[5],
    noun[3],
    ['の'],
    noun[2],
    predicate[6],
    noun[3],
    predicate[4],
    modifierClause[4],
    noun[3],
  ],
];
