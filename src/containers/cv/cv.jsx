import "./cv.css";
import React from "react";
import Button from "components/button/button";
import Grid from "@material-ui/core/Grid";

export default function Cv() {
  return (
    <section id="cv">
      <Grid container className="cv__grid">
        <Grid item xs={11} md={10} lg={10}>
          <div className="cv__text">
            <p>
              Si vous souhaitez, vous pouvez &nbsp;<b>télécharger</b>
              &nbsp; mon Curriculum Vitae !
            </p>
          </div>
        </Grid>
        <Grid item xs={11} md={2} lg={2}>
          <Button
            className="cv__btn"
            href="/ressources/cv_Faycel_Benyoussa.pdf"
            target="_blank"
            download
            title="mon cv"
          />
        </Grid>
      </Grid>
    </section>
  );
}
