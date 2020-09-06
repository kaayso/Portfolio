import React from "react";
import "./navigation.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Navigation({className, items, click, index}) {
  const mobileBreakPoint = useMediaQuery("(max-width:440px)");
  return (
    <div
      className={`navigation ${mobileBreakPoint ? "navigation--mobile" : ""} ${
        className ? className : ""
      }`}
    >
      {items.map((item) => {
        return (
          <div
            className={`navigation__btn ${
              index === item._key ? "navigation__btn--active" : ""
            }`}
            key={item._key}
            onClick={() => click(item._key)}
          >
            {item.label}
            <div className="navigation__btn--hover">
              <div className="navigation__btn--left-line"></div>
              <div className="navigation__btn--point"></div>
              <div className="navigation__btn--right-line"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
