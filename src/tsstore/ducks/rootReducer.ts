import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import repositories from './repositories';
import auth from './auth';
import user from './user';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    repositories,
    auth,
    user,
  });

export default createRootReducer;
