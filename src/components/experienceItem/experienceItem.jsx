import React from "react";
import "./experienceItem.css";
import Grid from "@material-ui/core/Grid";

export default function ExperienceItem(props) {
  return (
    <div className="experienceItem">
      <Grid container className="experienceItem__title">
        <Grid item xs={2} md={1} lg={1} className="experienceItem__year">
          {props.year}
        </Grid>
        <Grid item xs={2} md={1} lg={1}>
          <div className="experienceItem__shapes">
            <div className="experienceItem__point"></div>
            {!props.last && (
              <div className="experienceItem__vertical-line"></div>
            )}
          </div>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          {props.title}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} md={1} lg={1}></Grid>
        <Grid item xs={2} md={1} lg={1}>
          {!props.last && (
            <div className="experienceItem__shapes">
              <div className="experienceItem__shape-content"></div>

              <div className="experienceItem__vertical-line-content"></div>
            </div>
          )}
        </Grid>
        <Grid item xs={8} md={8} lg={8} className="experienceItem__content">
          {props.content}
          <div>{props.tags}</div>
        </Grid>
      </Grid>
    </div>
  );
}
