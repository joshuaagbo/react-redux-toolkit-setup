import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  item: {},
  error: "",
};

let postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    Get_Posts: (state, action) => {
      state.items += action.payload;
    },

    Get_Post: (state, action) => {
      state.item += action.payload;
    },
    Error: (state, action) => {
      state.error += "fail to fetch...";
    },
  },
});

export const { Get_Post, Get_Posts, Error } = postSlice.actions;
export default postSlice.reducer;
