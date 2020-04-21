import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

const initialState = {};
const enhancers = [];
export const history = createBrowserHistory();

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history)),
  ...enhancers,
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);
