//import "./App.css";
import React, { useState, useEffect } from "react";

//import style components
import { GlobalStyle } from "./GlobalStyle.style";
import * as Style from "./Components/Style.component";

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
    <Style.Container>
      <GlobalStyle />
      <Style.H1Style>Window resize </Style.H1Style>
      <Style.H2Style>
        The window width is : {windowSize.windowW}px
      </Style.H2Style>
      <Style.H2Style>
        The window height is : {windowSize.windowH}px
      </Style.H2Style>
    </Style.Container>
  );

  return (
    <Style.Container>
      <GlobalStyle />
      <Style.Button onClick={() => setShow(show => !show)}>
        Hide/Show Window Size
      </Style.Button>
      {show ? display : null}
    </Style.Container>
  );
}
export default App;
