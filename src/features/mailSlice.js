import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
      console.log("Yeah")
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;

// Push this to firebase and render our message tabs
