import React from "react";
import "./badge.css";

export default function Badge(props) {
  return (
    <div className="badge">
      <div className="badge__c1" />
      <div className="badge__c2" />
      <div className="badge__text">{props.text}</div>
    </div>
  );
}
