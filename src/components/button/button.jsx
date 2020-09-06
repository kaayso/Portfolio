import React from "react";
import "./button.css";

export default function LinkButton({href, className, target, download, title, onClick}) {
  const btnStyle = `l-button ${className ? className : ""}`;
  return (
    <a
      href={href}
      className={btnStyle}
      target={target}
      download={download}
      onClick={onClick}
    >
      <div className="l-button__layout"></div>
      <span>{title}</span>
    </a>
  );
}
