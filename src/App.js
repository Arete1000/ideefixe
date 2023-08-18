import "./App.css";
import { useState } from "react";

function App() {
  const [pink, setPink] = useState({ r: 255, g: 205, b: 232 });

  const [blue, setBlue] = useState({ r: 49, g: 187, b: 230 });

  function getPink() {
    return "rgb(" + pink.r + "," + pink.g + "," + pink.b + ")";
  }

  function getBlue() {
    return "rgb(" + blue.r + "," + blue.g + "," + blue.b + ")";
  }

  function darkenBlue() {
    const { r, g, b } = blue;
    setBlue({ r: r - 5, g: g - 15, b: b });
  }

  function darkenPink() {
    const { r, g, b } = pink;
    setPink({ r: r, g: g - 37, b: b - 17 });
  }

  return (
    <>
      <div
        className="square"
        style={{
          fontSize: 100,
          fontFamily: "fantasy",
        }}
      >
        <div
          className="top-left-circle"
          onClick={darkenPink}
          style={{
            backgroundColor: getPink(),
          }}
        ></div>
        <div className="top-middle">16</div>
        <div
          className="top-right-circle"
          onClick={darkenBlue}
          style={{
            backgroundColor: getBlue(),
          }}
        >
          {/* contents of semi circle go here */}
        </div>
      </div>
    </>
  );
}

export default App;
