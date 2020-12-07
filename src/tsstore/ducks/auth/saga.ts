/* eslint-disable require-yield */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signFailure, signInSucess } from './actions';
import { User } from '../user/types';

export function* signIn({ payload }: any) {
  try {
    console.log('dnasjkdn');
    const { login, password } = payload;
    const response = yield call(api.post, 'session', {
      login,
      password,
    });
    const { user }: { user: User } = response.data;
    api.defaults.headers.Authorization = 'a';

    yield put(signInSucess(user));

    history.push('/');
  } catch (error) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}
export function* setToken() {
  history.push('/register');
  console.log('jsadnaksn');

  api.defaults.headers.Authorization = `Bearer ${1}`;
}

export function signOut() {
  console.log('sadhasdalskdnlasn');
  history.push('/');
}
