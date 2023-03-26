import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="app__flex app__loader app__container">
      <div class="pyramid-loader app__container app__flex">
        <div class="wrapper">
          <span class="side side1">1</span>
          <span class="side side2">2</span>
          <span class="side side3">3</span>
          <span class="side side4">4</span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
  );
}
