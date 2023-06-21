import { configureStore } from "@reduxjs/toolkit";

const obj = [
  {
    a: {
      c: 3,
    },
    b: 2,
  },
];

const obj2 = [
  {
    ...obj,
    a: {
      ...obj.a,
      c: 42,
    },
  },
];
const obj3 = [
  {
    ...obj,
    a: {
      ...obj.a,
      c: 420,
    },
  },
];
// console.log(obj, obj2, obj3);

const arr = ["a", "b"];
const arr2 = arr.concat("c");
console.log(arr2);
const arr3 = arr.slice();
console.log(arr3);
arr3.push("c");
console.log(arr3);
console.log(arr3.reduce((prev) => console.log(prev)));
console.log(arr3);

const addStrings = (previousResult, currentItem) => {
  console.log({ prev: previousResult, currentItem });
  return previousResult + currentItem;
};

const totalString = arr.reduce(addStrings, 0);
console.log(totalString);

function counterReducer(state, action) {
  console.log({ state, action });
  if (action.type === "counter/incremented") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
}

const actions = [
  { type: "counter/incremented" },
  { type: "counter/incremented" },
];

const initailState = { value: 0 };
const finalResult = actions.reduce(counterReducer, initailState);
console.log(finalResult);

const store = configureStore({ reducer: counterReducer });
console.log(store.getState());
