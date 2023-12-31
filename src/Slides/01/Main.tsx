import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Slide from "@cenk1cenk2-presentations/react-reveal-base/dist/components/Slide";
import { getAbsolutePath } from "../../utils/functions.ts";
import useAnimate from "../../hooks/useAnimate.tsx";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import IconWrapper from "../../components/IconWrapper.tsx";

const Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(0, 0);

  const elon = useRef<HTMLDivElement>(null);
  const goblet = useRef<HTMLDivElement>(null);
  const balls = useRef<HTMLDivElement>(null);
  const table3d = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const icon1 = useRef<HTMLDivElement>(null);
  const icon2 = useRef<HTMLDivElement>(null);
  const icon3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 0.2 });
      tl1.from(elon.current, {
        duration: 0.7,
        opacity: 0,
        y: 70,
        scale: 0.9,
      });

      const tl2 = gsap.timeline({ delay: 0.3 });

      tl2.from(balls.current, {
        duration: 0.7,
        opacity: 0,
        y: -30,
        scale: 0.9,
      });

      const tl3 = gsap.timeline({ delay: 0.5 });
      const tl4 = gsap.timeline({ delay: 0.5 });
      tl3.from(goblet.current, {
        duration: 0.7,
        opacity: 0,
        x: 140,
        y: 80,
        scale: 0.1,
      });
      tl4
        .from(table3d.current, {
          duration: 0.7,
          opacity: 0,
          x: -120,
          y: 80,
          scale: 0.1,
        })
        .from(rightCol.current, {
          duration: 0.7,
          delay: 0.2,
          opacity: 0,
          scale: 0.5,
          ease: "back.out(2)",
        });

      const iconsDelay = 2;

      const tlIcon1 = gsap.timeline({ delay: iconsDelay });
      const tlIcon2 = gsap.timeline({ delay: iconsDelay + 0.3 });
      const tlIcon3 = gsap.timeline({ delay: iconsDelay + 0.2 });

      tlIcon1.from(icon1.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon2.from(icon2.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon3
        .from(icon3.current, {
          duration: 0.4,
          opacity: 0,
          scale: 0.3,
          ease: "back.out(4)",
        })
        .from(leftCol.current, {
          duration: 1.5,
          opacity: 0,
          y: -200,
          ease: "elastic.out(1, 0.4)",
        });
    });

    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bgred.png"
      }
      className="h-[80%] inset-0 absolute z-40"
    >
      {showContent.current && (
        <SectionContent>
          <Grid container className="h-full">
            <Grid xs={3} item ref={leftCol} className="flex items-end">
              <Box className="flex flex-col items-center justify-end w-[80%] mb-32">
                <div>
                  <Avatar
                    style={{
                      width: 120,
                      height: 120,
                    }}
                    src={
                      getAbsolutePath().coreUrl +
                      "/assets/slides/0000/img/stolik_pileczki_gora.png"
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <Typography fontWeight="bolder" fontSize="19px">
                    Zamów piłeczki do powiększania mózgu
                  </Typography>
                  <button
                    className="bg-yellow px-6 py-2 text-purple font-extrabold rounded-xl"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Zamawiam
                  </button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="h-full flex flex-col w-full justify-center items-center">
                <div className=" h-[400px] w-max relative">
                  <div ref={elon} className="z-10 relative">
                    <img
                      className="w-[400px]"
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/0000/img/Pozycja_1.png"
                      }
                    />
                  </div>
                  <div
                    ref={goblet}
                    className=" absolute"
                    style={{ top: "-100px", left: "-80px" }}
                  >
                    <img
                      className="h-[350px]"
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/0000/img/puchar.png"
                      }
                    />
                  </div>
                  <div
                    ref={balls}
                    className="flex absolute bottom-0 z-20"
                    style={{ left: "100px", bottom: 20 }}
                  >
                    <img
                      className="h-[130px]"
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/0000/img/pileczki.png"
                      }
                    />
                  </div>
                  <div
                    ref={table3d}
                    className="absolute"
                    style={{ top: "-20px", right: "-80px" }}
                  >
                    <img
                      className="h-[300px]"
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/0000/img/stolik_z_pileczkami.png"
                      }
                    />
                  </div>
                  <IconWrapper
                    innerRef={icon1}
                    x={70}
                    y={280}
                    z={30}
                    width={55}
                  >
                    <img
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/icons/icon_volume.svg"
                      }
                    />
                  </IconWrapper>
                  <IconWrapper innerRef={icon2} width={55} x={40} y={80} z={30}>
                    <img
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/icons/icon_list.svg"
                      }
                    />
                  </IconWrapper>
                  <IconWrapper
                    innerRef={icon3}
                    width={55}
                    x={270}
                    y={130}
                    z={30}
                  >
                    <img
                      src={
                        getAbsolutePath().coreUrl +
                        "/assets/slides/icons/icon_play.svg"
                      }
                    />
                  </IconWrapper>
                </div>
              </Box>
            </Grid>
            <Grid item xs={3} ref={rightCol} className="flex items-end">
              <Box className="flex flex-col mb-20 text-start">
                <Typography
                  style={{
                    fontWeight: "lighter",
                    fontSize: "0.9em",
                    wordBreak: "keep-all",
                  }}
                >
                  Narzędzie
                </Typography>
                <Typography
                  textTransform="lowercase"
                  style={{
                    fontWeight: "bold",
                    marginTop: "-15px",
                    wordBreak: "keep-all",
                    fontSize: "1.3rem",
                  }}
                >
                  do powiększania mózgu
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginTop: "-5px", lineHeight: "18px" }}
                  lineHeight="0px"
                >
                  Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj
                  się, że uczenie się było do tej pory błędnie robione.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SectionContent>
      )}
    </Slide>
  );
};

export default Main;
