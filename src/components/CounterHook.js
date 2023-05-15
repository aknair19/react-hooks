import { useState, useEffect } from "react";
const CounterHook = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    document.title = `Cliked ${count} times`;
    console.log("re-render");
  }, [input]);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default CounterHook;
