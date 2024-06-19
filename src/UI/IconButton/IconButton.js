import React from "react";
import classes from "./IconButton.module.css";

const IconButton = (props) => {
  return (
    <button
      className={classes.iconbutton}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default IconButton;