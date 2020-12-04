import { action } from 'typesafe-actions';
import { RepositoriesState, Repositorie, RepositoriesTypes } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repositorie[]) =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
