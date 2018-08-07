import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

const broswerHistoryRouterMiddleware = routerMiddleware(browserHistory);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, broswerHistoryRouterMiddleware)));

// then run the saga
sagaMiddleware.run(rootSaga)
store.subscribe(() => {
  console.log(store.getState());
})

export {
  store
}