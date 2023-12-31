import { useEffect, useState } from "react";
import Reveal from "reveal.js";

const useSynchronizeWithReveal = (cb?: () => void) => {
  const [slideCords, setSlideCords] = useState<{
    indexh: number;
    indexv: number;
  }>({ indexh: 0, indexv: 0 });
  useEffect(() => {
    Reveal.on("ready", () => {
      const { indexh, indexv } = Reveal.getState();

      setSlideCords({ indexh, indexv });
    });
    Reveal.on("slidechanged", () => {
      const { indexh, indexv } = Reveal.getState();
      setSlideCords({ indexh, indexv });
      if (cb) cb();
    });
  }, []);

  return {
    slideCords,
  };
};

export default useSynchronizeWithReveal;
