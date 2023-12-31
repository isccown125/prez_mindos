import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import { Box, Typography } from "@mui/material";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SectionContent from "../../components/reveal-components/SectionContent";
import useAnimate from "../../hooks/useAnimate";

const MTC14Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(13, 0);

  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 1 });
      tl1
        .from(header.current, {
          x: 300,
          opacity: 0,
          ease: "back.out(4)",
        })
        .from(body.current, { opacity: 0, x: 300, ease: "back.out(4)" });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl +
        "/assets/slides/1400/monitoring-bg-benchmark.png"
      }
    >
      {showContent.current && (
        <SectionContent>
          <Box className="w-[500px] text-left absolute top-[250px] right-[0px]">
            <Typography ref={header} variant="h4">
              Monitorujesz postępy
            </Typography>
            <Typography ref={body}>
              Wizualizacja to ścieżka postępu (która idzie w głąb tła) <br /> -
              ścieżki umiejętności - monitorujesz postępy
            </Typography>
          </Box>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC14Main;
