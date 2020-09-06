import React from 'react';
import './pViewer.css';
import { Link } from 'react-router-dom';

export default function PViewer({route, logo, title, subTitle}) {
  return (
    <Link to={route}>
      <div className="pViewer">
        <div className="pViewer__polygone-left"></div>
        <div className="pViewer__polygone-right"></div>
        <div className="pViewer__logo">
          <img src={logo} alt={logo} />
        </div>
        <div className="pViewer__content">
          <h2 className="pViewer__title">{title}</h2>
          <h4 className="pViewer__sub-title">{subTitle}</h4>
        </div>
      </div>
    </Link>
  );
}
