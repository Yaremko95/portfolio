import React from "react";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import { createUseStyles } from "react-jss";

import { MdKeyboardArrowRight } from "react-icons/md";
const useStyles = createUseStyles((theme) => ({
  about: {
    //fontSize: "1.1rem",
    //fontWeight: "600",
    // margin: "3.5rem 0",
    //width: "40%",
    color: "#989a9a",
  },
  imageContainer: {
    //overflow: "hidden",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    "&:before": {
      content: '""', // :before and :after both require content
      position: "absolute",
      width: "270px",
      height: "270px",
      // height: "100%",
      top: "22%",
      left: "35%", // Push the element 50% of the container's width to the right
      // transform: "skew(15deg) translateX(-100%)",
      border: `2px solid ${theme.primary.darkYellow}`,
    },
  },
  image: {
    position: "relative",
    height: "270px",
    objectFit: "cover",
    //marginRight: "auto",
    paddingTop: "0.9rem",
    filter: "grayscale(70%)",
    //boxShadow: "10px 10px 11px -6px rgba(0,0,0,0.75)",
  },

  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#989a9a",
    marginBottom: "0.3rem",
  },
  icon: {
    fontSize: "1rem",
    marginRight: "0.5rem",
    color: theme.primary.darkYellow,
  },

  button: {
    color: theme.primary.darkYellow,
  },
}));
function About(props) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Header>About Me</Header>
        <p className={classes.about}>
          Hello, I'm Tetiana, a web developer based in Poznan, Poland, who
          enjoys things that live on the Internet. I develop exceptional
          websites and web apps that provide intuitive, pixel-perfect user
          interfaces with efficient and modern backends.
        </p>
        <p className={classes.about}>
          {" "}
          I'm currently a Computer Science student in Opole University of
          Technology. During the participation in Erasmus+ exchange program at
          Jane University in Spain I joined Strive school where I worked on a
          wide variety of interesting and meaningful projects an a daily basis.
        </p>
        <p className={classes.about}>
          Here are a few technologies I've been working with:
        </p>
        <Grid container>
          <Grid item xs={4}>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>JavaScript (ES6)</span>{" "}
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>React.js (Redux)</span>{" "}
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>Node.js</span>{" "}
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>Express.js</span>{" "}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>MongoDB</span>{" "}
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>MySQL </span>{" "}
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>PostgreSQL (Sequelize)</span>{" "}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>HTML5/CSS3</span>
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>Bootstrap</span>
            </div>
            <div className={classes.listItem}>
              <MdKeyboardArrowRight className={classes.icon} />
              <span>Material UI</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={"/prof_img.jpg"} />
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
