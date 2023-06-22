import { compose, legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "./todos/reducer";
import {
  includeMeaningOfLife,
  sayHiOnDispathch,
} from "../exampleAddons/enhancers";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");
if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const composedEnhancer = compose(sayHiOnDispathch, includeMeaningOfLife);

const store = legacy_createStore(rootReducer, undefined, composedEnhancer);

export default store;
