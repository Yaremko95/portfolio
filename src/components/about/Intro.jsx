import React, { useEffect, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import { createUseStyles } from "react-jss";
import Button from "@material-ui/core/Button";
import OutlinedButton from "../buttons/Button";
import { TimelineLite, TweenLite, Back, TweenMax } from "gsap";
import { SplitText } from "../../plugins/SplitText";
import Grid from "@material-ui/core/Grid";

const useStyles = createUseStyles((theme) => ({
  top: {
    fontSize: "1.2rem",
    fontWeight: "600",
    //marginBottom: "2rem",
    color: theme.primary.darkYellow,
    margin: "1rem 0",
    padding: "0px",
  },
  name: {
    fontSize: "3rem",
    fontWeight: "800",
    //marginBottom: ".5rem",
    margin: "0px",
    padding: "0px",
    color: "whitesmoke",
    //color: theme.primary.darkYellow,
  },
  occupation: {
    fontSize: "3rem",
    fontWeight: "700",
    margin: "-5px 0",
    padding: "0px",
    //marginBottom: "2rem",
    color: theme.text.color.dark,
    //color: theme.primary.darkYellow,
  },
  about: {
    fontSize: "1.1rem",
    fontWeight: "600",
    margin: "3.5rem 0",
    width: "40%",
    color: "#989a9a",
  },
  imageContainer: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
  },
  image: {
    height: "450px",
    objectFit: "cover",
    margin: "auto",
    paddingTop: "1rem",
    filter: "grayscale(70%)",
  },
  button: {
    color: theme.primary.darkYellow,
  },
}));
const Intro = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const nameRef = useRef();
  const occup = useRef();
  const aboutRef = useRef();
  const topRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    const tl = new TimelineLite();
    let mySplitText = new SplitText(nameRef.current, { type: "words,chars" });
    let chars = mySplitText.chars;

    TweenLite.set(nameRef.current, { perspective: 400 });

    tl.staggerFrom(
      chars,
      2,
      {
        delay: 1,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 90,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut,
      },
      0.02,
      "+=0"
    );
    const tl2 = new TimelineLite();
    mySplitText = new SplitText(occup.current, { type: "chars, words" });
    chars = mySplitText.chars;

    TweenLite.set(occup.current, { perspective: 400 });

    tl2.staggerFrom(
      mySplitText.chars,
      2,
      {
        delay: 1.5,
        scale: 4,
        autoAlpha: 0,
        rotationX: -180,
        transformOrigin: "100% 50%",
        ease: Back.easeOut,
      },
      0.05
    );

    // TweenMax.to(occup.current, 0.1, {
    //   textShadow: "5px 2px 15px rgba(145, 233, 0, 1)",
    //   color: "#2EFEF7",
    // });

    const tl3 = new TimelineLite();
    mySplitText = new SplitText(aboutRef.current, {
      type: "chars, words, lines",
    });
    chars = mySplitText.chars;

    TweenLite.set(aboutRef.current, { perspective: 400 });

    tl3.staggerFrom(
      mySplitText.chars,
      2,
      { delay: 2, autoAlpha: 0, scale: 4 },
      0.01,
      0.5
    );
    const tl4 = new TimelineLite();
    mySplitText = new SplitText(topRef.current, { type: "lines" });
    chars = mySplitText.chars;

    TweenLite.set(topRef.current, { perspective: 400 });

    tl4.staggerFrom(
      mySplitText.lines,
      1.5,
      {
        delay: 2.8,
        opacity: 0,
        rotationY: -90,
        transformOrigin: "top center -250",
      },
      0.5
    );
    const tl5 = new TimelineLite();
    tl.from(buttonRef.current, 1.5, {
      y: -40,
      autoAlpha: 0,
      //rotationY: 180,
      transformOrigin: "top center -250",
      //delay: 1.5,
    });

    tl.play();

    // .staggerTo(mySplitText.words, 0.1, { scale: 0.9 }, 0.1, "words")
    // .staggerTo(
    //   mySplitText.words,
    //   0.2,
    //   { color: "white", scale: 1 },
    //   0.1,
    //   "words+=0.1"
    // );
  });
  return (
    <div ref={ref}>
      <p ref={topRef} className={classes.top}>
        Hi, my name is
      </p>

      <p ref={nameRef} className={classes.name}>
        TETIANA YAREMKO
      </p>

      <p ref={occup} className={classes.occupation}>
        I build things for the web.
      </p>

      <p ref={aboutRef} className={classes.about}>
        I'm a developer based in Poland specializing in building (and
        occasionally designing) exceptional, high-quality web applications.
      </p>
      <OutlinedButton ref={buttonRef}>Get in touch</OutlinedButton>

      {/*<Grid className={classes.imageContainer} item xs={4}>*/}
      {/*  <img className={classes.image} src={"/cv_image.jpg"} />*/}
      {/*</Grid>*/}
    </div>
  );
});

export default Intro;
