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
    pushUpUser: (state, action) => {
      let userId;
      state.users.find((item, index) => {
        if (item.id === action.payload) {
          userId = index;
          return true;
        }
      });

      const userById = state.users[userId];
      state.users.splice(userId, 1);
      state.users.push(userById);
    },
    addMessageUser: (state, action) => {
      let userID;
      state.users.find((item, index) => {
        if (item.id === state.userSelectedId) {
          userID = index;
          return true;
        }
      });

      if (userID || userID === 0) {
        state.users[userID].messages = action.payload;
      }
    },
  },
});

export const {
  selecteUser,
  searchedUsers,
  changeUserTemp,
  addMessageUser,
  setUsers,
  pushUpUser,
} = usersSlice.actions;

export default usersSlice.reducer;
