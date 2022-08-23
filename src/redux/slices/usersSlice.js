import { createSlice } from '@reduxjs/toolkit';
import { getUsersFromLS } from '../../utils/getDataFromLS';

const initialState = getUsersFromLS();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.items = action.payload;
    },
    selecteUser: (state, action) => {
      state.user = state.items.find((item) => item.id === action.payload);
    },
    filterUsers: (state, action) => {
      state.temp = action.payload;
    },
  },
});

export const { selecteUser, searchedUsers, filterUsers, setUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
