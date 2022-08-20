import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getDataFromLS';
import { sortUserByTime } from '../../utils/sortUsers';

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
      let userID;
      state.users.find((item, index) => {
        if (item.id === state.userSelectedId) {
          userID = index;
          return true;
        }
      });

      if (userID || userID == 0) {
        state.users[userID].messages = action.payload;
      }
    },
    searchedUsers: (state) => {
      if (state.userTemp.length < 1) {
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
  sortUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
