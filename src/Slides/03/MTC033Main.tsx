import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { Box, Typography } from "@mui/material";
import Slide from "@cenk1cenk2-presentations/react-reveal-base/dist/components/Slide";
import { getAbsolutePath } from "../../utils/functions.ts";

const MTC03Main = () => {
  useSynchronizeWithReveal();

  const message = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const game1 = useRef<HTMLDivElement>(null);
  const game2 = useRef<HTMLDivElement>(null);
  const game3 = useRef<HTMLDivElement>(null);
  const game4 = useRef<HTMLDivElement>(null);
  const game5 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });
      const tl2 = gsap.timeline({ delay: 0.2 });
      tl.from(message.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        scale: 0.7,
      });
      tl2
        .from(game1.current, { duration: 0.3, opacity: 0 })
        .from(game2.current, { duration: 0.3, opacity: 0 })
        .from(game3.current, { duration: 0.3, opacity: 0 })
        .from(game4.current, { duration: 0.3, opacity: 0 })
        .from(game5.current, { duration: 0.3, opacity: 0 });
    });

    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl +
        "/assets/slides/0100/img/strefy-frontview.png"
      }
    >
      <SectionContent>
        <Box className="flex absolute inset-0 w-full h-full">
          <div ref={container} className="relative flex w-full h-full">
            <Typography
              fontSize="18px"
              ref={game1}
              fontWeight="bolder"
              className="left-[80px] top-[280px] absolute"
            >
              Magiczny <br /> przedmiot
            </Typography>
            <Typography
              fontSize="18px"
              fontWeight="bolder"
              className="left-[210px] top-[310px] absolute"
              ref={game2}
            >
              Mind Reset
            </Typography>
            <Typography
              fontSize="18px"
              className="right-[210px] top-[210px] absolute"
              fontWeight="bolder"
              ref={game3}
            >
              Alfabet game
            </Typography>
            <Typography
              className="right-[0px] top-[190px] absolute"
              fontWeight="bolder"
              ref={game4}
            >
              Color game
            </Typography>
            <Typography
              className="right-[-150px] bottom-[60px] absolute"
              fontWeight="bolder"
              ref={game5}
            >
              Żonglowanie
            </Typography>
          </div>
        </Box>
        <div className="absolute bottom-0 w-full flex justify-center">
          <div
            ref={message}
            className="bg-focusZone rounded-2xl max-w-[600px] w-[60%] p-3"
          >
            <Typography
              variant="h4"
              style={{
                textTransform: "none",
                fontSize: "0.9em",
                fontWeight: "normal",
              }}
            >
              Witaj w Mind Training Center
            </Typography>
            <Typography>
              Zapoznaj się z salką gimnastyczną... <br />
              Rozejrzyj się i dowiedz się więcej o ćwiczeniach
            </Typography>
          </div>
        </div>
      </SectionContent>
    </Slide>
  );
};

export default MTC03Main;
