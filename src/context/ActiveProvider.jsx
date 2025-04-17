import { ActiveContext } from "./ActiveContext";
import { useState } from "react";

export default function ActiveProvider({ children }) {
  const [isActive, setisActive] = useState(false);
  return (
    <div>
      <ActiveContext.Provider value={{ isActive, setisActive }}>
        {children}
      </ActiveContext.Provider>
    </div>
  );
}
