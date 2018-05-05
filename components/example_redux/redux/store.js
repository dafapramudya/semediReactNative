// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import promiseMiddleware from 'redux-promise-middleware';

// import reducers from './rootReducers';

// const middleware = createReactNavigationReduxMiddleware(
//     "root",
//     state => state.nav
// );

// const store = createStore(
//     reducers,
//     applyMiddleware(
//         middleware,
//         logger,
//         promiseMiddleware()
//     ),
// );

// export default store;

import { createStore, applyMiddleware } from 'redux'
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import heroesReducer from '../reducers/heroes';

//create middleware
const middleware = applyMiddleware(logger, thunk, promise());

//create store
const store = createStore(reducer, middleware)
