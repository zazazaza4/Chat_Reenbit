import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../data';

const initialState = {
  users,
  filteredUsers: users,
  userSelectedId: null,
  userTemp: '',
  usersLoadingStatus: 'loading',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selecteUser: (state, action) => {
      state.userSelectedId = action.payload;
    },
    changeUserTemp: (state, action) => {
      state.userTemp = action.payload;
    },
    searchedUsers: (state) => {
      if (state.userTemp.length === 0) {
        state.filteredUsers = state.users;
      }

      const temp = state.userTemp.toLowerCase();

      state.filteredUsers = state.users.filter((item) => {
        return item.name.toLowerCase().indexOf(temp) > -1;
      });
    },
  },
});

export const { selecteUser, searchedUsers, changeUserTemp } =
  usersSlice.actions;

export default usersSlice.reducer;
