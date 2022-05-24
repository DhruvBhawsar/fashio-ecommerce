import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllRoutess } from "./Components/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AllRoutess />
    </div>
  );
}

export default App;
