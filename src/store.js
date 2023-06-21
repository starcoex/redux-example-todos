// import { configureStore } from "@reduxjs/toolkit";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const store = configureStore({ reducer: counterReducer });

// console.log(store.getState());

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { incremented, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(incremented());
store.dispatch(incremented());
store.dispatch(incremented());
