import React from "react";

export default function Title({ titleName }) {
  const titleDivStyle = {
    display: "flex",
    justifyContent: "space-Between",
    color: "white",
    width: "95%",
    margin: "auto",
    marginTop: "1rem",
    marginBottom: "1rem",
  };
  const buttonStyle = {
    fontSize: "1rem",
    color: "grey",
    border: "none",
    textDecoration: "underline",
    backgroundColor: "transparent",
    cursor: "pointer",
  };
  return (
    <div style={titleDivStyle}>
      <h2 style={{ fontSize: "1.5rem" }}>{titleName}</h2>
      <button style={buttonStyle}>Show all</button>
    </div>
  );
}
