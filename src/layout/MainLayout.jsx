import React from "react";
import { createUseStyles } from "react-jss";
import NavBar from "../components/nav/NavBar";
const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.primary.lightblue,
    height: "100%",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    color: theme.text.color.light,
  },
}));
function MainLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <NavBar />
      {props.children}
    </div>
  );
}

export default MainLayout;
