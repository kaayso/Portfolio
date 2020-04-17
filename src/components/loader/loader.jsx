/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./loader.css";

export default function Loader(props) {
  return (
    <div className={`loader${!props.visible ? "--hidden" : ""}`}>
      <>
        <div className="loader__bubble1"></div>
        <div className="loader__bubble2"></div>
        <div className="loader__bubble3"></div>
      </>
    </div>
  );
}
