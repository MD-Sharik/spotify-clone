import React from "react";
export default function Card({ imgurl, name, description }) {
  const cardStyle = {
    width: "12rem",
    height: "16rem",
    background: "linear-gradient(180deg, #1f1f1f 0%, #1E1E1E 50%)",
    borderRadius: "10px",
    padding: "10px",
    cursor: "pointer",
  };
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
    <div style={cardStyle}>
      <div style={imgholder}>
        <img style={imgStyle} src={imgurl} alt="img" />
      </div>

      <h2 style={headline}>{name}</h2>
      <p style={descript}>{description}</p>
    </div>
  );
}
