import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions.ts";

const MTC02MainBalls = () => {
  useSynchronizeWithReveal();

  const elon = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(elon.current, { opacity: 0 });
    });

    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl +
        "/assets/slides/0201/img/strefa-koncentracji.png"
      }
    >
      <Box className="h-full w-full relative">
        <div ref={elon} className="absolute left-[230px] bottom-[25px]">
          <img
            src={
              getAbsolutePath().coreUrl +
              "/assets/slides/0000/img/Pozycja_1.png"
            }
            className="w-[400px]"
          />
        </div>
      </Box>
    </Slide>
  );
};

export default MTC02MainBalls;
