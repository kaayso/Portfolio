import React from "react";
import "./button.css";

export default function LinkButton(props) {
  return (
    <a
      href={props.href}
      className={`l-button ${props.className ? props.className : ""}`}
      target={props.target}
      download={props.download}
      onClick={props.onClick}
    >
      <div className="l-button__layout"></div>
      <span>{props.title}</span>
    </a>
  );
}
