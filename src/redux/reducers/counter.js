import { UPDATE_COUNTER } from 'redux/constants/counter';
const initialState = {
  count: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COUNTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
