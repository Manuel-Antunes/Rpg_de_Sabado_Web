/* eslint-disable no-shadow */
/*
    Action types
*/

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST',
  SIGN_OUT_IN_SUCCESS = '@auth/SIGN_OUT_IN_SUCCESS',
}

/**
 *Data types
 */

export interface Auth {
  token: string | undefined | null;
  signed: boolean;
}
/**
 * State type
 */

export interface AuthState {
  readonly data: Auth;
  readonly loading: boolean;
  readonly error: boolean;
}
