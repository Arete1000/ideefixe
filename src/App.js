import "./App.css";
import { useState } from "react";

function App() {
  const [pink, setPink] = useState({ r: 255, g: 205, b: 232 });

  function getPink() {
    return "rgb(" + pink.r + "," + pink.g + "," + pink.b + ")";
  }

  function darkenPink() {
    const { r, g, b } = pink;
    setPink({ r: r, g: g - 37, b: b - 17 });
  }

  return (
    <>
      <div className="square">
        <div
          className="top-left-circle"
          onClick={darkenPink}
          style={{
            backgroundColor: getPink(),
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
