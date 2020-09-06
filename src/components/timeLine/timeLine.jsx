import React from "react";
import "./timeLine.css";
import DashedL from "assets/images/dashed_line.svg";

export default function TimeLine({route, activeIndex, setActiveIndex}) {
  return (
    <div className="timeLine">
      <img src={DashedL} className="timeLine__line" alt="" />
      <div className="timeLine__bubbles">
        {route.map((item, index) => (
          <div
            key={item.id}
            className={`timeLine__item ${
              activeIndex === index ? "timeLine__item--active" : ""
            }`}
          >
            <div className="timeLine__year">{item.year}</div>
            <div
              className="timeLine__bubble"
              onClick={() => setActiveIndex(index)}
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
