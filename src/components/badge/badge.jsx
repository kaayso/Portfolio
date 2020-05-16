import React from "react";
import "./badge.css";

export default function Badge(props) {
  return (
    <li className="badge" style={{ backgroundColor: `${props.color}` }}>
      {props.text}
    </li>
  );
}
