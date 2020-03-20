/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Jump from "react-reveal/Jump";
import "./loader.css";

export default function Loader(props) {
  return (
    <div className={`loader${!props.visible ? "--hidden" : ""}`}>
      <Jump forever>
        <span className="loader__bubble1" />
      </Jump>
      <Jump forever delay={100}>
        <span className="loader__bubble2" />
      </Jump>
      <Jump forever delay={200}>
        <span className="loader__bubble3" />
      </Jump>
    </div>
  );
}
