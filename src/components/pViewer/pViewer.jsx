import React from 'react';
import './pViewer.css';
import { Link } from 'react-router-dom';

export default function PViewer(props) {
  return (
    <Link to={props.route}>
      <div className="pViewer">
        <div className="pViewer__polygone-left"></div>
        <div className="pViewer__polygone-right"></div>
        <div className="pViewer__logo">
          <img src={props.logo} alt={props.logo} />
        </div>
        <div className="pViewer__content">
          <h2 className="pViewer__title">{props.title}</h2>
          <h4 className="pViewer__sub-title">{props.subTitle}</h4>
        </div>
      </div>
    </Link>
  );
}
