import "./styles.css";
import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const handleShow = (toggle) => {
    setShow(toggle);
  };

  return (
    <div className="App">
      <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti"
        ref={confettiRef}
      >
        <h3>Confetti Test 🎉</h3>
        <Confetti
          recycle={show}
          numerOfPieces={80}
          width={width}
          height={height}
        />
      </div>
      <div>
        <p> Hover mouse over the orange bar to activate confetti.</p>
      </div>
    </div>
  );
}
