import React from "react";
import "./timeLine.css";
import DashedL from "assets/images/dashed_line.svg";

export default function TimeLine(props) {
  return (
    <div className="timeLine">
      <img src={DashedL} className="timeLine__line" alt="" />
      <div className="timeLine__bubbles">
        {props.route.map((item, index) => (
          <div
            key={item.id}
            className={`timeLine__item ${
              props.activeIndex === index ? "timeLine__item--active" : ""
            }`}
          >
            <div className="timeLine__year">{item.year}</div>
            <div
              className="timeLine__bubble"
              onClick={() => props.setActiveIndex(index)}
            >
              <div className="timeLine__bubble--bg"></div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={DashedL}
        className="timeLine__line timeLine__line--reverse"
        alt=""
      />
    </div>
  );
}
