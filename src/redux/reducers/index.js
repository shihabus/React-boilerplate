import { combineReducers } from 'redux';
import Counter from './counter';

const rootReducer = combineReducers({
  counter: Counter
});

export default rootReducer;
