import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import { Box, Typography } from "@mui/material";
import IconWrapper from "../../components/IconWrapper";
import { useRef, useLayoutEffect } from "react";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { gsap } from "gsap";

const MTC15Main = () => {
  useSynchronizeWithReveal();

  const elon = useRef<HTMLDivElement>(null);
  const edwart = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({ delay: 0.6 });
      const tl2 = gsap.timeline({ delay: 0.8 });
      const tl3 = gsap.timeline({ delay: 1 });
      const tl4 = gsap.timeline({ delay: 1.2 });
      tl1.from(edwart.current, { y: 300, opacity: 0 });
      tl2.from(elon.current, { y: 300, opacity: 0 });
      tl3.from(text.current, { x: 300, opacity: 0 });
      tl4.from(icon_volume.current, { scale: 0, opacity: 0 });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png"
      }
    >
      <div className="absolute top-[130px]" ref={edwart}>
        <img
          className="w-[350px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1500/edwartok.png"}
        />
      </div>
      <div className="absolute top-[200px] left-[250px]" ref={elon}>
        <img
          className="w-[400px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1500/elon.png"}
        />
      </div>
      <IconWrapper x={0} y={500} height={40} width={40} innerRef={icon_volume}>
        <img
          src={
            getAbsolutePath().coreUrl + "/assets/slides/icons/icon_volume.svg"
          }
        />
      </IconWrapper>
      <Box className="w-[300px] text-left absolute bottom-[180px] right-0">
        <Typography variant="h4" ref={text}>
          Ucz się z Elonem <br /> i Edwartem!
        </Typography>
      </Box>
    </Slide>
  );
};
export default MTC15Main;
