import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import IconWrapper from "../../components/IconWrapper";
import { Box, Typography } from "@mui/material";
import { useRef, useLayoutEffect } from "react";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { gsap } from "gsap";

const MTC16Main = () => {
  useSynchronizeWithReveal();

  const elon = useRef<HTMLDivElement>(null);
  const wstega = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);
  const icon_list = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({ delay: 0.8 });
      const tl2 = gsap.timeline({ delay: 0.6 });
      const tl3 = gsap.timeline({ delay: 1 });
      const tl4 = gsap.timeline({ delay: 1.5 });
      tl1.from(elon.current, { y: 300, opacity: 0 });
      tl2.from(wstega.current, { y: 300, opacity: 0 });
      tl3
        .from(header.current, { x: 300, opacity: 0 })
        .from(body.current, { x: 300, opacity: 0 });
      tl4
        .from(icon_volume.current, {
          duration: 0.4,
          scale: 0,
          opacity: 0,
          ease: "back.out(4)",
        })
        .from(icon_list.current, {
          delay: 0.3,
          duration: 0.4,
          scale: 0,
          opacity: 0,
          ease: "back.out(4)",
        });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/cut_bg.png"
      }
    >
      <div ref={elon} className="absolute bottom-0 left-[130px] z-10">
        <img
          className="w-[550px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1600/elon_cut.png"}
        />
      </div>
      <div ref={wstega} className="absolute bottom-0 right-[-450px]">
        <img
          className="w-[1350px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1600/wstega2.png"}
        />
      </div>
      <IconWrapper innerRef={icon_volume} width={60} height={60} x={0} y={500}>
        <img
          src={
            getAbsolutePath().coreUrl + "/assets/slides/icons/icon_volume.svg"
          }
        />
      </IconWrapper>
      <IconWrapper innerRef={icon_list} width={60} height={60} x={100} y={450}>
        <img
          src={getAbsolutePath().coreUrl + "/assets/slides/icons/icon_list.svg"}
        />
      </IconWrapper>
      <Box className="text-left absolute right-0 top-[100px]">
        <Typography ref={header} variant="h4">
          Witaj
        </Typography>
        <Typography ref={body}>
          Elon wita i przecina wstęgę + widok POV z domkiem na starcie
        </Typography>
      </Box>
    </Slide>
  );
};

export default MTC16Main;
