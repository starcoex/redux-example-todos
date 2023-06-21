import { configureStore, legacy_createStore } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        value: state.value + 1,
      };
    case "counter/decrememnted":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}

export const store = configureStore({ reducer: counterReducer });
store.dispatch({ type: "counter/incremented" });
console.log(store.getState());
