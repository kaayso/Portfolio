import React from "react";
import "./pViewer.css";

export default function PViewer(props) {
  return (
    <div className="pViewer">
      <div className="pViewer__polygone-left"></div>
      <div className="pViewer__polygone-right"></div>
      <div className="pViewer__logo">
        <img src={props.logo} alt="sscraping" />
      </div>
      <div className="pViewer__content">
        <h2 className="pViewer__title">{props.title}</h2>
        <h4 className="pViewer__sub-title">{props.subTitle}</h4>
      </div>
    </div>
  );
}
