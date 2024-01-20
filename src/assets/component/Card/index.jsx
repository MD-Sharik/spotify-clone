import React from "react";
import "./index.css";
export default function Card({ imgurl, name, description, link }) {
  const imgStyle = {
    height: "10rem",
    width: "100%",
    borderRadius: "5px",
    objectFit: "cover",
    objectPosition: "center",
    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.8))",
  };
  const imgholder = {
    margin: "auto",
    width: "100%",
    position: "relative",
    height: "10rem",
  };
  const headline = {
    fontSize: "16px",
    color: "white",
    marginTop: "1rem",
  };
  const descript = {
    fontSize: "14px",
    color: "#a7a7a7",
    fontWeight: "light",
    marginTop: "0.5rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <div className="hover cardStyle">
      <div className="imgholder">
        <div
          className="circle"
          onClick={() => {
            const audio = new Audio(link);
            audio.play();
          }}
        >
          <img
            className="play"
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/100/play--v1.png"
            alt="play--v1"
          />
        </div>
        <img className="imgStyle" src={imgurl} alt="img" />
      </div>

      <h2 className="headline">{name}</h2>
      <p className="descript">{description}</p>
    </div>
  );
}
