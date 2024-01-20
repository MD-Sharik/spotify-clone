import React from "react";
import "./Style.css";

export default function Title({ titleName }) {
  return (
    <div className="titleDivStyle">
      <h2 className="title">{titleName}</h2>
      <button className="buttonStyle">Show all</button>
    </div>
  );
}
