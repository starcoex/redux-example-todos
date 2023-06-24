import { applyMiddleware, compose, legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "./todos/reducer";
import {
  includeMeaningOfLife,
  sayHiOnDispathch,
} from "../exampleAddons/enhancers";
import { print1, print2, print3 } from "../exampleAddons/middlewae";
import { composeWithDevTools } from "redux-devtools-extension";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");
if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3)
);

// const composedEnhancer = compose(sayHiOnDispathch, includeMeaningOfLife);
const middlewareEnhancer = applyMiddleware(print1, print2, print3);

const store = legacy_createStore(rootReducer, composedEnhancer);

export default store;
