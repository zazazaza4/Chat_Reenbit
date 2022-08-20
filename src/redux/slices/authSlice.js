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
    signIn: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const selectIsAuth = (state) => !!state.auth.data;

export const { logout, signIn } = authSlice.actions;

export default authSlice.reducer;
