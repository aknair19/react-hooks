import { CountContext } from "../App";
import ComponentY from "./ComponentY";
import { useContext } from "react";
const ComponentX = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1> Component X</h1>

      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 3 })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 3 })
        }
      >
        {" "}
        Minus
      </button>
      <button
        onClick={() => countContext.countDispatch({ type: "reset", value: 0 })}
      >
        {" "}
        Reset
      </button>
    </div>
  );
};

export default ComponentX;
