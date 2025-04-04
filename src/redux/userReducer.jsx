import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("userInfo"))
const initialState = {
  user: userData || null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUserReducer: (state, action) => {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state.user = action.payload; 
    },
  },
});

export const { addUserReducer } = userSlice.actions;
export default userSlice.reducer;
