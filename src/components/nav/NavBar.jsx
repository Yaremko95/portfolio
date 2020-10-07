import React, { RefObject, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography, { TypographyTypeMap } from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import gsap from "gsap";

import { Paper } from "@material-ui/core";
import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",

    overflow: "hidden",
  },
  paper: {
    backgroundColor: "transparent",
    color: "whitesmoke",
    padding: "1rem 0",
  },

  title: {
    flexGrow: 1,
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const titleRef = useRef(null);
  const paperRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(paperRef.current, 1, { y: -100, opacity: 0 });
    tl.from(titleRef.current, 1.5, {
      height: 0,
      opacity: 0,
      display: "none",
      delay: -1,
    });
  }, []);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <div ref={titleRef}>My logo</div>
          </Typography>
          <TabPanel />
        </Toolbar>
      </Paper>
    </div>
  );
};
export default NavBar;
