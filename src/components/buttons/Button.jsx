import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

const OutlinedButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "transparent",
    borderColor: "#ff8300",
    color: "#ff8300",
    borderRadius: "0",
    // "&:hover": {
    //   backgroundColor: "#0069d9",
    //   borderColor: "#0062cc",
    //   boxShadow: "none",
    // },
    // "&:active": {
    //   boxShadow: "none",
    //   backgroundColor: "#0062cc",
    //   borderColor: "#005cbf",
    // },
    // "&:focus": {
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },
  },
})(Button);

export default OutlinedButton;
