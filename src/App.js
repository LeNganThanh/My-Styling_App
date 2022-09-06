//import "./App.css";
import React, { useState, useEffect } from "react";

//declare all styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const h1Style = {
  fontSize: "3.5rem",
  color: "maroon",
};

const h2Style = {
  color: "darkgreen",
  fontStyle: "italic",
  fontSize: "2rem",
};
//
function App() {
  //setting for the button:hover
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const buttonStyle = {
    fontSize: "2.5rem",
    margin: "8rem 0 3rem",
    padding: "15px 30px",
    backgroundColor: isHover ? "darkcyan" : "yellow",
    color: isHover ? "yellow" : "darkblue",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  //setting body background color
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/random')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  //old code
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
    <div style={containerStyle}>
      <h1 style={h1Style}>Window resize </h1>
      <br />
      <h2 style={h2Style}>The window width is : {windowSize.windowW}px</h2>
      <h2 style={{ color: "darkblue" }}>
        The window height is : {windowSize.windowH}px
      </h2>
    </div>
  );

  return (
    <div style={containerStyle}>
      <button
        onClick={() => setShow(show => !show)}
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Hide/Show Window Size
      </button>
      {show ? display : null}
    </div>
  );
}
export default App;
