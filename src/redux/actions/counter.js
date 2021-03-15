import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_COUNTER
} from 'redux/constants/counter';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const updateCounter = payload => ({
  type: UPDATE_COUNTER,
  payload
});
