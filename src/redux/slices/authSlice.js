import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => !!state.auth.data;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
