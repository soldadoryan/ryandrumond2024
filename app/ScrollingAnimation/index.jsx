"use client";
import { useEffect } from "react";
import { getDataAttributes } from "./getAttrs";
import { getCurrentPercent } from "./getCurrentPercent";

function ScrollingAnimation() {
  const handleScroll = () => {
    const elements = document.querySelectorAll("*[data-animation]");
    elements.forEach((el) => {
      const scroll = window.scrollY;
      const {
        start,
        end,
        startvalue,
        endvalue,
        unit,
        attribute,
        prefixvalue,
        sufixvalue,
      } = getDataAttributes(el);
      const currentPercent = getCurrentPercent(scroll, start, end);
      const currentAnimationValue =
        (currentPercent / 100) * (+endvalue - +startvalue);
      el.style[attribute] = `
          ${prefixvalue}${
        currentAnimationValue + +startvalue
      }${sufixvalue}${unit}`;
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <></>;
}

export default ScrollingAnimation;
