import { useState } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <CounterContext.Provider value={{ count, setCount }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
}
