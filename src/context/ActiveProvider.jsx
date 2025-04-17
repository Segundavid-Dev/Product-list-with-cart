import { ActiveContext } from "./ActiveContext";
import { useState } from "react";

export default function ActiveProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <ActiveContext.Provider value={{ isActive, setIsActive }}>
        {children}
      </ActiveContext.Provider>
    </div>
  );
}
