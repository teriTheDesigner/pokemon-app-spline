import { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";

function App() {
  return (
    <div className="">
      <Spline
        className="splineMobile"
        scene="https://prod.spline.design/VX0aVbxGbjo6hycq/scene.splinecode"
      />

      <Spline
        className="spline"
        scene="https://prod.spline.design/QG1tJLenXJNR1K4p/scene.splinecode"
      />
    </div>
  );
}

export default App;
