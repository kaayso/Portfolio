import React from "react";
import "./badge.css";

export default function Badge({color, text}) {
  return (
    <li className="badge" style={{ backgroundColor: `${color}` }}>
      {text}
    </li>
  );
}
