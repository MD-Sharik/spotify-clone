import React from "react";
import "./index.css";
import Button from "../Buttons/Index";

export default function PlayListCard({ title, sub, button }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{sub}</p>
      <Button title={button} />
      {/* <button className="button">{button}</button> */}
    </div>
  );
}
