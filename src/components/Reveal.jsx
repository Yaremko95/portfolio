import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateFrom = (elem, direction, fromLeft = null, fromRight = null) => {
  direction = direction | 1;

  let x = 0,
    y = direction * 100;
  // if(elem.classList.contains("gs_reveal_fromLeft")) {
  //     x = -100;
  //     y = 0;
  // } else if(elem.classList.contains("gs_reveal_fromRight")) {
  //     x = 100;
  //     y = 0;
  // }
  gsap.fromTo(
    elem.current,
    { x: x, y: y, autoAlpha: 0 },
    {
      delay: 0.4,
      duration: 1,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
};

const hide = (elem) => {
  gsap.set(elem.current, { autoAlpha: 0, opacity: 0, visibility: "hidden" });
};

function Reveal(props) {
  const revealRef = useRef(null);

  useEffect(() => {
    //hide(revealRef); // assure that the element is hidden when scrolled into view
    //gsap.set(revealRef.current, { autoAlpha: 0, opacity: 0 });
    ScrollTrigger.create({
      trigger: revealRef.current,
      onEnter: function () {
        animateFrom(revealRef);
      },
      onEnterBack: function () {
        animateFrom(revealRef, -1);
      },
      onLeave: function () {
        hide(revealRef);
      }, // assure that the element is hidden when scrolled into view
    });
  });

  return (
    <div style={{ visibility: "hidden" }} ref={revealRef}>
      {props.children}
    </div>
  );
}

export default Reveal;
