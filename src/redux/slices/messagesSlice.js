import { createSlice } from '@reduxjs/toolkit';
import { getMessagesFromLS } from '../../utils/getDataFromLS';

const initialState = getMessagesFromLS();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.messages = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentDialogId = action.payload;
    },
    addMessagesById: (state, action) => {
      state.messages[action.payload.id].push(action.payload.message);
    },
  },
});

export const { setItems, setCurrentId, addMessagesById } =
  messagesSlice.actions;

export default messagesSlice.reducer;
