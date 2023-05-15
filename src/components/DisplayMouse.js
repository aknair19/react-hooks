import { useState } from "react";
import HookMouse from "./HookMouse";

const DisplayMouse = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      {display && <HookMouse />}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
};

export default DisplayMouse;
