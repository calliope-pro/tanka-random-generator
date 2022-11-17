import { vocabs } from './vocabs.config';

const { modifierClause, noun, predicate } = vocabs;

export const templates: { [key: number]: string[] }[][] = [
  [
    noun,
    { 1: ['の'] },
    noun,
    predicate,
    modifierClause,
    modifierClause,
    noun,
    predicate,
    noun,
  ],
  [
    noun,
    { 1: ['は'] },
    noun,
    { 1: ['の'] },
    noun,
    predicate,
    modifierClause,
    noun,
    predicate,
    noun,
  ],
];
