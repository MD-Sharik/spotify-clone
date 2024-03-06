import React from "react";
import "./Style.css";

export default function ListView({ Title, desc, link, imgUrl, onSelect }) {
  const handleClick = () => {
    onSelect({ title: Title, link }); // Call onSelect function with the selected song information
  };
  return (
    <div>
      <div className="list" onClick={handleClick}>
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
