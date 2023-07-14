import Section from "../../components/reveal-components/Section.tsx";
import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";

const Mtc03MainBalls = () => {
  useSynchronizeWithReveal("2/1");

  const elon = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(elon.current, { opacity: 0 });
    });

    return () => ctx.revert();
  });

  return (
    <Section slideBackgroundImgUrl="/assets/slides/0201/img/strefa-koncentracji.png">
      <Box className="h-full w-full relative">
        <div ref={elon} className="absolute left-[230px] bottom-[25px]">
          <img
            src="/assets/slides/0000/img/Pozycja_1.png"
            className="w-[400px]"
          />
        </div>
      </Box>
    </Section>
  );
};

export default Mtc03MainBalls;
