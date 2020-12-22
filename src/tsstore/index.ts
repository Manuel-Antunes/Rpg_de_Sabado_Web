import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { AuthState } from './ducks/auth/types';
import { RepositoriesState } from './ducks/repositories/types';
import persistReducers from './persistReducers';
import createRootReducer from './ducks/rootReducer';
import { UserState } from './ducks/user/types';
import rootSaga from './ducks/rootSaga';
import history from '../services/history';

export interface ApplicationState {
  repositories: RepositoriesState;
  auth: AuthState;
  user: UserState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistReducers(createRootReducer(history)),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
