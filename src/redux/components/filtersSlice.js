import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };
const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
