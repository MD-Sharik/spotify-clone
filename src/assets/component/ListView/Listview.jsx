import React from "react";
import "./Style.css";

export default function ListView({ Title, desc, link, imgUrl }) {
  return (
    <div>
      <div
        className="list"
        onClick={() => {
          const audio = new Audio(link);
          audio.play();
        }}
      >
        <div className="LeftImg">
          <img src={imgUrl} alt="" />
        </div>
        <div className="rightList">
          <div className="rightTitle">{Title}</div>
          <div className="rightDesc">{desc}</div>
        </div>
      </div>
    </div>
  );
}
