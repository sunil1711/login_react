import { createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return  {
    ...createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore;