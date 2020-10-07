import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { createUseStyles } from "react-jss";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TimelineLite } from "gsap";

function Project({ reverse }) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      paddingTop: "3rem",
    },
    image: {
      width: "550px",
      float: reverse ? "right" : "",
      borderRadius: "10px",
      boxShadow: "10px 10px 11px -6px rgb(36, 34, 46)",
    },
    details: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-end",
      // alignItems: "end",
    },
    subTitle: {
      marginLeft: !reverse ? "auto" : "",
      fontSize: "0.9rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: theme.primary.darkYellow,
    },
    title: {
      marginLeft: !reverse ? "auto" : "",
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: theme.text.color.dark,
    },
    descWrapper: {
      marginLeft: !reverse ? "auto" : "",
      backgroundColor: "#20232f",
      color: "#989a9a",
      padding: "1rem",
      boxShadow: " 10px 10px 11px -6px rgba(25,27,36,1)",
      zIndex: "1000",
    },
    desc: {
      textAlign: "justify",
      display: "block",
    },
    toolsWrapper: {
      display: "flex",
      width: "60%",
      marginLeft: !reverse ? "auto" : "",
      justifyContent: "space-between",
      fontSize: "0.9rem",
      marginTop: "0.5rem",
      color: "#989a9a",
      fontWeight: "600",
      marginBottom: "1rem",
    },
    iconsWrapper: {
      marginLeft: !reverse ? "auto" : "",
      display: "flex",
      width: "10%",

      justifyContent: "space-between",
    },
    icon: {
      color: theme.text.color.dark,
      fontSize: "1.2rem",
    },
  }));

  const classes = useStyles();
  const imgRef = useRef();
  const detailsRef = useRef();
  const spans = [];

  useEffect(() => {
    const tl = new TimelineLite({ paused: true });
    tl.from(detailsRef.current, 1, {
      opacity: 0,
      x: -40,
      autoAlpha: 0,
    }).staggerFrom(spans, 0.5, { autoAlpha: 0, y: 40, delay: -0.2 }, 0.1);

    tl.play();
  }, []);
  return (
    <>
      {!reverse && (
        <>
          <Grid item xs={5} className={classes.container}>
            <img
              className={classes.image}
              src={
                "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
              }
            />
          </Grid>
          <Grid item xs={7} className={classes.container}>
            <div className={classes.details}>
              <span
                className={classes.subTitle}
                {...{ ref: (e) => (spans[0] = e) }}
              >
                Featured Project
              </span>
              <span
                className={classes.title}
                {...{ ref: (e) => (spans[1] = e) }}
              >
                LinkedIn
              </span>
              <div className={classes.descWrapper} ref={detailsRef}>
                <span className={classes.desc}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum.
                </span>
              </div>
              <div
                className={classes.toolsWrapper}
                {...{ ref: (e) => (spans[2] = e) }}
              >
                <span>React.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>Socket.Io</span>
              </div>
            </div>
            <div
              className={classes.iconsWrapper}
              {...{ ref: (e) => (spans[3] = e) }}
            >
              <FaExternalLinkAlt className={classes.icon} />
              <AiFillGithub className={classes.icon} />
            </div>
          </Grid>
        </>
      )}
      {reverse && (
        <>
          <Grid item xs={7} className={classes.container}>
            <div className={classes.details}>
              <span className={classes.subTitle}>Featured Project</span>
              <span className={classes.title}>LinkedIn</span>
              <div className={classes.descWrapper} ref={detailsRef}>
                <span className={classes.desc}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum.
                </span>
              </div>
              <div className={classes.toolsWrapper}>
                <span>React.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>Socket.Io</span>
              </div>
            </div>
            <div className={classes.iconsWrapper}>
              <FaExternalLinkAlt className={classes.icon} />
              <AiFillGithub className={classes.icon} />
            </div>
          </Grid>
          <Grid item xs={5} className={classes.container}>
            <img
              className={classes.image}
              src={
                "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
              }
            />
          </Grid>
        </>
      )}
    </>
  );
}

export default Project;
