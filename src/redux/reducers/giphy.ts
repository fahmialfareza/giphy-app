import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { GiphyState } from "../types";

const initialState: GiphyState = {
  giphy: [],
};

const giphySlicer = createSlice({
  name: "giphy",
  initialState,
  reducers: {
    setGiphy: (state, action) => {
      state.giphy = action.payload;
    },
  },
});

export const { setGiphy } = giphySlicer.actions;

export const selectGiphy = (state: RootState) => state.giphy;

export default giphySlicer.reducer;
