import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";
const portalElement = document.getElementById("overlays");
const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Model;
