import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/auth';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    auth: authSlice
  }
});

export default store;
