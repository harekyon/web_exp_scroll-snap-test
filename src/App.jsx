import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapwrap">
      <div className="wrap">
        <div className="box1">aaa</div>
        <div className="box2">aaa</div>
        <div className="box3">aaa</div>
      </div>
    </div>
  );
}

export default App;
