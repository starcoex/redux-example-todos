import React, { useState } from "react";
// import { legacy_createStore } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "counter/incremented":
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     case "counter/decrememnted":
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     default:
//       return state;
//   }
// }

// export const store = legacy_createStore();
// console.log(store);

export default function Count() {
  const [counter, setCounter] = useState(0);
  const handleIncremenent = () => {
    setCounter((current) => current + 1);
  };
  return (
    <div>
      <span>Cicked: {counter} times</span>
      <button onClick={handleIncremenent}>+</button>
      <button>-</button>
      <button>Increment if odd</button>
      <button>Increment async</button>
    </div>
  );
}
