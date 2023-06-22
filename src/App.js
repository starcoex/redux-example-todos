import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Count from "./components/Count";
import store from "./components/store";

function App() {
  // console.log("Initail state: ", store.getState());
  // const unsubscribe = store.subscribe(() => {
  //   console.log("state atfer dispatch: ", store.getState());
  // });
  // store.dispatch({ type: "todos/todoAdded", payload: "dispath2 send actions" });
  // store.dispatch({ type: "todos/todoToggled", payload: 0 });
  // store.dispatch({ type: "todos/todoToggled", payload: 1 });
  // store.dispatch({ type: "filters/statusFilterChanged", payload: "Active" });
  // store.dispatch({
  //   type: "filters/colorFilterChanged",
  //   payload: { color: "red", changeType: "added" },
  // });
  // unsubscribe();
  // store.dispatch({ type: "todos/todoAdded", payload: "Try creating a store" });
  console.log("Dispatching action");
  store.dispatch({ type: "todos/todoAdded", payload: "Hello Payload" });
  console.log("Dispatch complete");
  console.log("State after dispatch :", store.getState());
  return (
    <div>
      <Count />
    </div>
  );
}

export default App;
