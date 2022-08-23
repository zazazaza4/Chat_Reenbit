import { configureStore } from '@reduxjs/toolkit';
import users from './slices/usersSlice';
import messages from './slices/messagesSlice';

export const store = configureStore({
  reducer: {
    users,
    messages,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
