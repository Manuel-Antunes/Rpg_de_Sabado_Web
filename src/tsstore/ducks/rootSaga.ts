import { all, takeLatest } from "redux-saga/effects";

import { RepositoriesTypes } from "./repositories/types";

import { load } from "./repositories/sagas";
import * as auth from "./auth/saga";
import { AuthTypes } from "./auth/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, auth.signIn),
    takeLatest(AuthTypes.SIGN_OUT, auth.signOut),
    takeLatest(AuthTypes.SIGN_IN_SUCCESS, auth.setToken),
  ]);
}
