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
    pushUpUser: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      const userById = state.items[index];
      state.items.splice(index, 1);
      state.items.push(userById);
    },
    setNotification: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      state.items[index]['notification'] = true;
    },
    deleteNotification: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      state.items[index]['notification'] = false;
    },
  },
});

export const {
  selecteUser,
  searchedUsers,
  filterUsers,
  setUsers,
  pushUpUser,
  setNotification,
  deleteNotification,
} = usersSlice.actions;

export default usersSlice.reducer;
