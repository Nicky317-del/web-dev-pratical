import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function GrandChild() {
  const data = useContext(UserContext);

  return (
    <div>
      
      <p>{data}</p>
    </div>
  );
}

export default GrandChild;