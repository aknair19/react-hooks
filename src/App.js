import "./styles.css";
import { createContext, useReducer } from "react";
import CounterHook from "./components/CounterHook";
import DataFetching from "./components/DataFetching";
import HookMouse from "./components/HookMouse";
import DisplayMouse from "./components/DisplayMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";

import ComponentC from "./components/ComponentC";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

import ComponentX from "./components/ComponentX";
import ComponentY from "./components/ComponentY";
import ComponentZ from "./components/ComponentZ";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export const CountContext = createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h4> Count - {count}</h4>

        <ComponentX />
        <ComponentY />
        <ComponentZ />
      </CountContext.Provider>
    </div>
  );
}
export default App;
