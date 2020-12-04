import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { AuthState } from './ducks/auth/types';
import { RepositoriesState } from './ducks/repositories/types';
import persistReducers from './persistReducers';
import rootReducer from './ducks/rootReducer';
import { UserState } from './ducks/user/types';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
  auth: AuthState;
  user: UserState;
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  // <Store<ApplicationState>> essa tipagem estava dando erro
  persistReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
