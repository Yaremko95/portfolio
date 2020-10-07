import React, { createRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Intro from "../components/about/Intro";
import gsap from "gsap";
import Reveal from "../components/Reveal";
import About from "../components/about/About";
import ProjectsContainer from "../components/projects/ProjectsContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: "5%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Home(props) {
  const classes = useStyles();
  const currentRef = createRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(currentRef.current, 1.5, {
      opacity: 0,
      // y: 50,
    });
  }, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Intro ref={currentRef} />
          <div style={{ height: "24rem" }}></div>
          <Reveal>
            <About />
          </Reveal>
          <div style={{ height: "24rem" }}></div>

          <ProjectsContainer />

          <div style={{ height: "24rem" }}></div>
          <div style={{ height: "24rem" }}></div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
