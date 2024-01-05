import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authSlice from './slices/auth';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
};

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    auth: persistReducer<ReturnType<typeof authSlice>>(
      persistAuthConfig,
      authSlice
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
