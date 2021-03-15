import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'redux/reducers';
import rootSaga from 'redux/sagas';

const bindMiddleware = middleWares => {
  const { composeWithDevTools } = require('redux-devtools-extension');
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 10
  });
  return composeEnhancers(applyMiddleware(...middleWares));
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = [sagaMiddleware];
  const { createLogger } = require('redux-logger');
  const logger = createLogger({});
  middleware = [...middleware, logger];
  const store = createStore(rootReducer, bindMiddleware(middleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
