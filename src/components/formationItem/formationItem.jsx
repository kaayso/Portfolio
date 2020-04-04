import React from "react";
import "./formationItem.css";
import Grid from "@material-ui/core/Grid";

export default function FormationItem(props) {
  return (
    <div className="formation-item">
      <Grid container className="formation-item__title">
        <Grid item xs={2} md={2} lg={1}>
          <div className="formation-item__title-point"></div>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          {props.title}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} md={2} lg={1}></Grid>
        <Grid item xs={8} md={8} lg={8}>
          <ul className="formation-item__content">
            {props.content.map(el => (
              <li>
                <div className="formation-item__content-point"></div>
                {el}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
