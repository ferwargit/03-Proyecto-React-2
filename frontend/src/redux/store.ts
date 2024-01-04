import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/auth';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    auth: authSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
