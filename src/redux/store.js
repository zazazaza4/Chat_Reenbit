import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/authSlice';
import users from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    auth,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
