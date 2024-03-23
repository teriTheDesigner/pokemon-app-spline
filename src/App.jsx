import { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Spline
        className="splineMobile"
        scene="https://prod.spline.design/VX0aVbxGbjo6hycq/scene.splinecode"
      />

      <Spline
        className="spline"
        scene="https://prod.spline.design/QG1tJLenXJNR1K4p/scene.splinecode"
      />
    </>
  );
}

export default App;
