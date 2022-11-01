import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const initialState = {
  count: 1,
  users: [],
};
const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        count: state.count + action.payload,
      };

      break;
    case "SUBTRACT":
      state = {
        ...state,
        count: state.count - action.payload,
      };
      break;
  }
  return state;
};
const store = createStore(reducer);
store.subscribe(() => {
  console.log("store updated!", store.getState);
});
store.dispatch({
  type: "ADD",
  payload: 1,
});
store.dispatch({
  type: "ADD",
  payload: 10,
});
store.dispatch({
  type: "ADD",
  payload: 5,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
