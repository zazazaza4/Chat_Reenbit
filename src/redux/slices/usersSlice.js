import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getDataFromLS';

const initialState = getCartFromLS();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    selecteUser: (state, action) => {
      state.userSelectedId = action.payload;
    },
    changeUserTemp: (state, action) => {
      state.userTemp = action.payload;
    },
    addMessageUser: (state, action) => {
      const userID = state.users.find((item) => item.id === state.SelectedId);

      if (userID) {
        state.users[userID].messages = action.payload;
      }
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

export const {
  selecteUser,
  searchedUsers,
  changeUserTemp,
  addMessageUser,
  setUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
