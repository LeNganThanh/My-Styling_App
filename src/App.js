//import "./App.css";
import React, { useState, useEffect } from "react";
//get css from module
import StyleCSS from "./modules/Style.module.css";

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
    <div className={StyleCSS.container}>
      <h1 className={StyleCSS.h1style}>Window resize </h1>
      <h2 className={StyleCSS.h2styleP1}>
        The window width is : {windowSize.windowW}px
      </h2>
      <h2 className={StyleCSS.h2styleP2}>
        The window height is : {windowSize.windowH}px
      </h2>
    </div>
  );

  return (
    <div className={StyleCSS.container}>
      <button className={StyleCSS.btn} onClick={() => setShow(show => !show)}>
        Hide/Show Window Size
      </button>
      {show ? display : null}
    </div>
  );
}
export default App;
