import React from "react";
import "./carouselNav.css";

export default function CarouselNav(props) {
  return (
    <div className="carouselNav">
      <div
        className="carouselNav__btn"
        onClick={() => props.navigate(props.index - 1)}
      >
        <svg className="back" height="24" viewBox="0 0 24 24" width="24">
          <path
            fill="#69EE00"
            d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
          />
        </svg>
      </div>
      <div
        onClick={() => props.navigate(0)}
        className={`carouselNav__state${props.index === 0 ? "--active" : ""}`}
      >
        <div />
      </div>
      <div
        onClick={() => props.navigate(1)}
        className={`carouselNav__state${props.index === 1 ? "--active" : ""}`}
      >
        <div />
      </div>
      <div
        onClick={() => props.navigate(2)}
        className={`carouselNav__state${props.index === 2 ? "--active" : ""}`}
      >
        <div />
      </div>
      <div
        className="carouselNav__btn"
        onClick={() => props.navigate(props.index + 1)}
      >
        <svg className="forward" height="24" viewBox="0 0 24 24" width="24">
          <path
            fill="#69EE00"
            d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
          />
        </svg>
      </div>
    </div>
  );
}
