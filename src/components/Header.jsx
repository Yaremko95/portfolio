import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles((theme) => ({
  header: {
    fontSize: "1.4rem",
    fontWeight: "600",
    //marginBottom: "2rem",
    color: theme.primary.darkYellow,

    // margin: "1rem 0",
    padding: "0px",
  },
  lineContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",

    //padding: "0 1rem",
  },
  line: {
    width: "75%",
    height: "1px",
    marginLeft: "0.5rem",
    backgroundColor: "#f5b497",
    opacity: "0.5",
  },
}));
function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.lineContainer}>
      <span className={classes.header}>{props.children}</span>
      <div className={classes.line}></div>
    </div>
  );
}

export default Header;
