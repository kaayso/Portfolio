import React, { Fragment } from "react";
import "./progressBar.css";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function ProgressBar(props) {
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    document
      .getElementsByClassName(
        "MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate"
      )
      [props.index].appendChild(document.createElement("span"));

    document.getElementsByClassName(
      "MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate"
    )[props.index].innerHTML = `<span>${props.label}</span>`;

    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }
    const timer = setInterval(progress, props.interval);

    return () => {
      clearInterval(timer);
    };
  }, [props.index, props.interval, props.label]);
  return (
    <Fragment>
      <LinearProgress
        className={props.className}
        value={completed}
        variant="determinate"
      />
    </Fragment>
  );
}
