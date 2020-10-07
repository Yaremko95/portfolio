import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  createRef,
} from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import MuiTab from "@material-ui/core/Tab";
import MuiTabs from "@material-ui/core/Tabs";

import { TimelineLite } from "gsap";
import TableRow from "@material-ui/core/TableRow";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,

    //width: "80%",
    //marginLeft: "auto",
    backgroundColor: "transparent",
  },
  appBar: {
    visibility: "hidden",
    backgroundColor: "transparent",
    color: "whitesmoke",
    boxShadow: "none",
    //borderRadius: theme.shape.borderRadius,
  },
}));
const Tab = withStyles({
  root: {
    visibility: "hidden",
    color: "whitesmoke",
    cursor: "pointer",
    fontSize: ".9rem",
    textTransform: "none",
  },
})(MuiTab);
const Tabs = withStyles({
  indicator: {
    backgroundColor: "#C26248",
  },
})(MuiTabs);

export default function TabPanel() {
  const classes = useStyles();

  const tabsList = ["About", "Services", "Works"];
  let tabsRef = null;

  const tabs = [];

  useEffect(() => {
    const tl = new TimelineLite({ paused: true });
    tl.from(tabsRef, 0.5, { opacity: 0, autoAlpha: 0 }).staggerFrom(
      tabs,
      0.5,
      { autoAlpha: 0, y: 40, delay: -0.2 },
      0.1
    );

    tl.play();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        {...{ ref: (e) => (tabsRef = e) }}
      >
        <Tabs
          indicatorColor="primary"
          aria-label="scrollable auto tabs example"
        >
          {tabsList.map((tab, index) => (
            <Tab {...{ ref: (e) => (tabs[index] = e) }} label={tab} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
