import { useEffect, useState } from "react";
import Reveal from "reveal.js";
import { setInitialState, useAppDispatch } from "../store";

export const getSlideCords = (cords: string) => {
  return cords.replace(/^[0-9]+\/[0-9]+/g, cords);
};

const useSynchronizeWithReveal = (currentSlide: string) => {
  const [slideCords, setSlideCords] = useState<string>(currentSlide);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Reveal.on("ready", () => {
      dispatch(
        setInitialState({
          currentStatePresentation: Reveal.getState(),
        })
      );
    });
    Reveal.on("slidechanged", (event) => {
      setSlideCords(`${event.indexh}/${event.indexv}`);
    });
  }, []);

  useEffect(() => {
    getSlideCords(slideCords);
  }, [slideCords]);

  return {
    slideCords,
  };
};

export default useSynchronizeWithReveal;
