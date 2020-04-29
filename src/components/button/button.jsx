import React from "react";
import "./button.css";

export default function LinkButton(props) {
  return (
    <a href="#creations" className="l-button">
      <div className="l-button__layout"></div>
      <span>{props.title}</span>
    </a>
  );
}
