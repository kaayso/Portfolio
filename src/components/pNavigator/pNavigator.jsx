import React from "react";
import "./pNavigator.css";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

export default function PNavigator({onPrevious, onNext}) {
  return (
    <div className="PNavigator">
      <Tooltip title="Projet précédent">
        <Button
          onClick={() => onPrevious()}
          className="PNavigator__left-btn"
        >
          <ChevronLeft />
        </Button>
      </Tooltip>
      <Tooltip title="Projet suivant">
        <Button
          onClick={() => onNext()}
          className="PNavigator__right-btn"
        >
          <ChevronRight />
        </Button>
      </Tooltip>
    </div>
  );
}
