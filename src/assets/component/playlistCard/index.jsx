import React from "react";
import "./index.css";

export default function PlayListCard({ title, sub, button }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{sub}</p>
      <button className="button">{button}</button>
    </div>
  );
}
