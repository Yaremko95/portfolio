import React from "react";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import Project from "./Project";
import Reveal from "../Reveal";

function ProjectsContainer(props) {
  return (
    <>
      <Reveal>
        <Header>Some Things I've Built</Header>
      </Reveal>
      <Reveal>
        <Grid container>
          <Project reverse={false} />
        </Grid>
      </Reveal>
      <Reveal>
        <Grid container>
          <Project reverse={true} />
        </Grid>
      </Reveal>
      <Reveal>
        <Grid container>
          <Project reverse={false} />
        </Grid>
      </Reveal>
    </>
  );
}

export default ProjectsContainer;
