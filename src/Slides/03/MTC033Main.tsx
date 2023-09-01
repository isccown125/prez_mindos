import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { Box, IconButton, Typography } from "@mui/material";
import Slide from "@cenk1cenk2-presentations/react-reveal-base/dist/components/Slide";
import { getAbsolutePath } from "../../utils/functions.ts";
import PulseIcon from "../../components/icons/PulseIcon.tsx";
import IconWrapper from "../../components/IconWrapper.tsx";
import Cutscene from "../../components/cutscenes/Cutscene.tsx";
import { useAppDispatch } from "../../store/index.ts";
import { openCutscene } from "../../store/slices/cutscenes-slice.ts";
import useAnimate from "../../hooks/useAnimate.tsx";

const CUTSCENES_TEXT = {
  magic: {
    title: "sddas",
    body: "asddas",
    color: "red",
  },
  alfabetGame: {
    title: "Witaj w Mind Training Center",
    body: "Zapoznaj się z salką gimnastyczną... <br />Rozejrzyj się i dowiedz się więcej o ćwiczeniach",
    color: "red",
  },
  colorGame: {
    title: "sddas",
    body: "asddas",
    color: "red",
  },
  zonglowanie: {
    title: "sddas",
    body: "asddas",
    color: "red",
  },
  chill: {
    title: "sddas",
    body: "asddas",
    color: "red",
  },
  koncetracja: {
    title: "sddas",
    body: "asddas",
    color: "red",
  },
};

const MTC03Main = () => {
  useSynchronizeWithReveal();

  const { animate, showContent } = useAnimate(2, 0);

  const [currentText, setCurrentText] = useState<{
    title: string;
    body: string;
    color: string;
  }>({ ...CUTSCENES_TEXT.alfabetGame });

  const dispatch = useAppDispatch();

  const message = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const game1 = useRef<HTMLDivElement>(null);
  const game2 = useRef<HTMLDivElement>(null);
  const game3 = useRef<HTMLDivElement>(null);
  const game4 = useRef<HTMLDivElement>(null);
  const game5 = useRef<HTMLDivElement>(null);
  const icon1 = useRef<HTMLDivElement>(null);
  const icon2 = useRef<HTMLDivElement>(null);
  const icon3 = useRef<HTMLDivElement>(null);
  const icon4 = useRef<HTMLDivElement>(null);
  const icon5 = useRef<HTMLDivElement>(null);
  const icon6 = useRef<HTMLDivElement>(null);
  const icon7 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl = gsap.timeline({ delay: 0.8 });
      const tl2 = gsap.timeline({ delay: 0.2 });
      const tl3 = gsap.timeline({ delay: 0.8 });
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
      tl3
        .from(icon1.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon2.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon3.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon4.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon5.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon6.current, { opacity: 0, duration: 0.4, scale: 0 })
        .from(icon7.current, { opacity: 0, duration: 0.4, scale: 0 });
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
      {showContent && (
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
                className="left-[210px] top-[370px] absolute"
                ref={game2}
              >
                Mind Reset
              </Typography>
              <Typography
                fontSize="18px"
                className="right-[200px] top-[240px] absolute"
                fontWeight="bolder"
                ref={game3}
              >
                Alfabet game
              </Typography>
              <Typography
                className="right-[0px] top-[215px] absolute"
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
                {currentText.title}
              </Typography>
              <Typography>{currentText.body}</Typography>
            </div>
          </div>

          <IconWrapper innerRef={icon1} x={150} y={50}>
            <PulseIcon />
          </IconWrapper>
          <IconWrapper innerRef={icon2} x={800} y={10}>
            <button
              onClick={() => setCurrentText({ ...CUTSCENES_TEXT.colorGame })}
            >
              <PulseIcon />
            </button>
          </IconWrapper>
          <IconWrapper innerRef={icon3} x={20} y={300}>
            <IconButton
              onClick={() =>
                dispatch(
                  openCutscene({
                    name: "relaks",
                    content: () => <div></div>,
                    path: "/assets/slides/0201/video/wyobraznia.mp4",
                  })
                )
              }
            >
              <PulseIcon />
            </IconButton>
          </IconWrapper>
          <IconWrapper innerRef={icon4} x={160} y={390}>
            <PulseIcon />
          </IconWrapper>
          <IconWrapper innerRef={icon5} x={580} y={260}>
            <PulseIcon />
          </IconWrapper>
          <IconWrapper innerRef={icon6} x={810} y={230}>
            <PulseIcon />
          </IconWrapper>
          <IconWrapper innerRef={icon7} x={930} y={530}>
            <IconButton
              onClick={() =>
                dispatch(
                  openCutscene({
                    name: "relaks",
                    content: () => <div></div>,
                    path: "/assets/slides/0201/video/zonglowanie.mp4",
                  })
                )
              }
            >
              <PulseIcon />
            </IconButton>
          </IconWrapper>
        </SectionContent>
      )}
      <Cutscene>
        <div></div>
      </Cutscene>
    </Slide>
  );
};

export default MTC03Main;
