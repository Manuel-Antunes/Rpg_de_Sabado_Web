/* eslint-disable @typescript-eslint/no-explicit-any */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer, AnyAction } from 'redux';

export default (reducers: Reducer): Reducer<any, AnyAction> => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
