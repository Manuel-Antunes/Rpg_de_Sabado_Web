/*
    Action types
*/

export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

/**
 *Data types
 */
export interface Repositorie {
  id: number;
  name: string;
}

/**
 * State type
 */

export interface RepositoriesState {
  readonly data: Repositorie[];
  readonly loading: boolean;
  readonly error: boolean;
}
