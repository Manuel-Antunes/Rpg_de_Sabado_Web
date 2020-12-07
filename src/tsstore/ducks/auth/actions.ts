/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';

import { AuthTypes } from './types';
import { User } from '../user/types';

export const signInRequest = (login: string, password: string) =>
  action(AuthTypes.SIGN_IN_REQUEST, { login, password });

export const signInSucess = (data: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { data });

export const signFailure = () => action(AuthTypes.SIGN_FAILURE);

export const signOut = () => action(AuthTypes.SIGN_OUT);
