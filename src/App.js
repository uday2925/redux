import { useState } from "react";
import { store } from "./redux/store";
import "./styles.css";

export default function App() {
  const [update, setupdate] = useState(1);
  const { dispatch, subscribe } = store;
  const { count } = store.getState();
  subscribe(() => {
    setupdate((pre) => pre + 1);
    console.log("updated");
  });
  return (
    <div className="App">
      <h1>RCT 211 REACT-REDUX</h1>
      <h3>COUNT:{count}</h3>
      {update}
      <button
        onClick={() => {
          dispatch({ type: "inccount" });
          console.log(store.getState);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "deccount" });
          console.log(count);
        }}
      >
        -
      </button>
    </div>
  );
}
