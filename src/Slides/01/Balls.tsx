import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import { Box, Typography } from "@mui/material";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions.ts";

const Balls = () => {
  const { slideCords } = useSynchronizeWithReveal();
  const balls = useRef<HTMLDivElement>(null);
  const yellowBG = useRef<HTMLDivElement>(null);
  const ballsHeader = useRef<HTMLDivElement>(null);
  const ballsDescription = useRef<HTMLDivElement>(null);
  const monoBalls = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { indexh, indexv } = slideCords;

    const ctx = gsap.context(() => {
      if (indexh === 0 && indexv === 1) {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.from(balls.current, {
          duration: 1,
          opacity: 0,
          x: 250,
          y: 200,
          scale: 0.36,
        });

        const tl2 = gsap.timeline({ delay: 0.2 });
        tl2.from(yellowBG.current, { duration: 0.8, x: 1000 });

        const tl3 = gsap.timeline({ delay: 0.6 });
        tl3.from(ballsHeader.current, { duration: 0.7, x: 200 });

        const tl4 = gsap.timeline({ delay: 0.8 });
        tl4.from(ballsDescription.current, { duration: 0.8, x: 150 });

        const tl5 = gsap.timeline({ delay: 0.6 });
        tl5.from(monoBalls.current, { duration: 0.8, x: 100 });
      }
    });
    return () => ctx.revert();
  }, [slideCords]);

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bgred.png"
      }
    >
      <SectionContent>
        <Box className="flex h-full">
          <div ref={balls} className="w-full flex justify-center items-center ">
            <img
              className="h-[350px]"
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/0001/img/pileczki.png"
              }
            />
          </div>
          <div ref={yellowBG} className="bg-yellow h-full w-[60%] px-6">
            <div ref={monoBalls} className="h-[160px] relative">
              <img
                className="w-[170px] absolute -bottom-14 -right-4"
                src={
                  getAbsolutePath().coreUrl +
                  "/assets/slides/0001/img/pileczki-monokolor.png"
                }
              />
            </div>
            <Typography
              variant="h4"
              style={{ textTransform: "none", fontSize: "0.9em" }}
              ref={ballsHeader}
              className="text-start"
            >
              <span className="text-purple font-extrabold">
                Piłeczki <br /> do żonglowania
              </span>
            </Typography>
            <div className="pr-20">
              <Typography
                className="text-purple text-start"
                fontWeight="700"
                ref={ballsDescription}
              >
                Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się
                że uczenie się było do tej pory błędnie robione.
              </Typography>
            </div>
          </div>
        </Box>
      </SectionContent>
    </Slide>
  );
};

export default Balls;
