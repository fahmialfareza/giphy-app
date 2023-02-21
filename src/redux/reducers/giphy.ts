import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { GiphyState } from "../types";

const initialState: GiphyState = {
  giphy: [],
  loading: false,
};

const giphySlicer = createSlice({
  name: "giphy",
  initialState,
  reducers: {
    setGiphy: (state, action) => {
      state.giphy = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setGiphy, setLoading } = giphySlicer.actions;

export const selectGiphy = (state: RootState) => state.giphy;

export default giphySlicer.reducer;
