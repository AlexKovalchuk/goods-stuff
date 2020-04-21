import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {saga} from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
export const history = createBrowserHistory();

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history), sagaMiddleware),
  ...enhancers,
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(saga);
