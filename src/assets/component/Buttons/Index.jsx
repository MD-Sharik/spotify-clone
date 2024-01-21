import React from "react";
import "./Style.css";
export default function Button({ title }) {
  return (
    <div>
      <button className="py">{title}</button>
    </div>
  );
}
