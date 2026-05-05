import React from "react";
import Counter from "./components/Counter";
import UserContext from "./context/UserContext";
import Child from "./components/Child";

function App() {
  const value = "Hello from Context";

  return (
    <div>
      

      {/* Counter App */}
      <Counter />

     

      {/* Context API */}
      <UserContext.Provider value={value}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

export default App;