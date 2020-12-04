import { createStore, applyMiddleware, Store } from "redux";
import { AuthState } from "./ducks/auth/types";
import { RepositoriesState } from "./ducks/repositories/types";
import persistReducers from "./persistReducers";
import rootReducer from "./ducks/rootReducer";
import createSagaMiddleware from "redux-saga";
import { UserState } from "./ducks/user/types";
import { persistStore } from "redux-persist";
import rootSaga from "../store/models/rootSaga";

export interface ApplicationState {
  repositories: RepositoriesState;
  auth: AuthState;
  user: UserState;
}
const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  persistReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
