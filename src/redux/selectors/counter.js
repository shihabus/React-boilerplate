import { createSelector } from 'reselect';

const counterState = state => state.counter;

export const counterSelector = createSelector(
  counterState,
  state => state.count
);
