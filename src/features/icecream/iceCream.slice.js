import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCreams--;
    },
    restored: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numberOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    // extraReducers is the called and it checks the case if cakeActions.ordered is called then it executes the callback .
    builder.addCase(cakeOrdered, (state, action) => {
      state.numberOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restored } = iceCreamSlice.actions;
