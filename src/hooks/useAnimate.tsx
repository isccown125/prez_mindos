import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
interface EventReveal extends Event {
  indexh: number;
  indexv: number;
}

const useAnimate = (indexh: number, indexv: number) => {
  const animate = useRef(false);
  const showContent = useRef(false);

  useEffect(() => {
    Reveal.on("ready", () => {
      const state = Reveal.getState();
      if (state.indexh === indexh && indexv === state.indexv) {
        animate.current = true;
      }
      if (state.indexh === indexh && indexv === state.indexv) {
        showContent.current = true;
      }
    });
    Reveal.on("slidechanged", (e) => {
      showContent.current = false;
      const event = e as EventReveal;
      if (event.indexh === indexh && indexv === event.indexv) {
        animate.current = true;
        showContent.current = true;
      }
    });
  }, []);

  return { animate, showContent };
};

export default useAnimate;
