import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";

const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default appStore;
