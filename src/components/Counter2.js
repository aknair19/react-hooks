import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="counter1">
        <h1>First Counter {count.firstCounter}</h1>
        <h1>Second Counter {count.secondCounter}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment Five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement Five
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div className="counter2">
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement2
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter2;
