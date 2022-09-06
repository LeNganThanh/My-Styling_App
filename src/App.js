import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const initialW = window.innerWidth;
  const initialH = window.innerHeight;
  const [windowSize, setWindowSize] = useState({
    windowW: initialW,
    windowH: initialH,
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        windowH: window.innerHeight,
        windowW: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleWindowResize);
    //handleWindowResize();

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);

  const display = (
    <div className="App">
      <h1>Window resize </h1>
      <br />
      <h2>The window width is : {windowSize.windowW}px</h2>
      <h2>The window height is : {windowSize.windowH}px</h2>
    </div>
  );

  return (
    <div className="App">
      <button onClick={() => setShow(show => !show)}>
        Hide/Show Window Size
      </button>
      {show ? display : null}
    </div>
  );
}

export default App;
