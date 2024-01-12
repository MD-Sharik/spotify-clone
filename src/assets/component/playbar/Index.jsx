import React from "react";
import "./style.css";

export default function PlayAudio() {
  return (
    <div>
      <div id="wrap">
        <footer id="playbar">
          <div id="buttons">
            <button id="prev">
              <img
                width="90"
                height="90"
                style={{ rotate: "180deg" }}
                src="https://img.icons8.com/ios-glyphs/90/end--v1.png"
                alt="end--v1"
              />
            </button>
            <button id="play">
              <img
                width="60"
                height="60"
                style={{ Top: "-5px" }}
                src="https://img.icons8.com/fluency-systems-filled/96/play.png"
                alt="play"
              />
            </button>
            <button id="next">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/ios-glyphs/90/end--v1.png"
                alt="end--v1"
              />
            </button>
          </div>
          <div id="track">
            <div class="track">
              <div class="knob"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
