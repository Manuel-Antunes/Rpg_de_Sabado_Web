import { combineReducers } from 'redux';

import repositories from './repositories';
import auth from './auth';
import user from './user';

export default combineReducers({
  repositories,
  auth,
  user,
});
