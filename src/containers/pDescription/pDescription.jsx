import React from "react";
import "./pDescription.css";
import { useParams } from "react-router-dom";

export default function PDescription() {
  let { slug } = useParams();
  return (
    <div className="pDescription">
      <h3>ID: {slug}</h3>
    </div>
  );
}
