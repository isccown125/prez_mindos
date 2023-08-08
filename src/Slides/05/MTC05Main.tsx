import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import IconWrapper from "../../components/IconWrapper";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";

const Mtc05Main = () => {
  useSynchronizeWithReveal();

  const table = useRef<HTMLDivElement>(null);
  const elon = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);
  const icon_list = useRef<HTMLDivElement>(null);
  const icon_play = useRef<HTMLDivElement>(null);
  const prizesHeader = useRef<HTMLDivElement>(null);
  const prizesBody = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      const tl2 = gsap.timeline({ delay: 0.3 });
      const tl3 = gsap.timeline({ delay: 0.6 });
      const tl4 = gsap.timeline({ delay: 0.8 });

      tl.from(table.current, {
        duration: 0.8,
        x: -300,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      });
      tl2.from(elon.current, {
        duration: 0.8,
        x: -300,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      });

      tl3.from(prizesHeader.current, { duration: 0.6, opacity: 0 });
      tl4.from(prizesBody.current, { duration: 1.0, opacity: 0 });

      const iconsDelay = 1.5;

      const tlIcon1 = gsap.timeline({ delay: iconsDelay });
      const tlIcon2 = gsap.timeline({ delay: iconsDelay + 0.3 });
      const tlIcon3 = gsap.timeline({ delay: iconsDelay + 0.2 });

      tlIcon1.from(icon_list.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon2.from(icon_play.current, {
        opacity: 0,
        duration: 0.4,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon3
        .from(icon_volume.current, {
          duration: 0.4,
          opacity: 0,
          scale: 0.3,
          ease: "back.out(4)",
        })
        .from(leftCol.current, {
          opacity: 0,
          duration: 1.5,
          y: -200,
          ease: "elastic.out(1, 0.4)",
        });
    });

    return () => ctx.revert();
  });

  return (
    <Slide backgroundImage="/assets/slides/0400/img/redbg4.png">
      <div ref={elon} className="absolute bottom-[100px] left-0">
        <img
          className="w-[400px]"
          src="/assets/slides/0000/img/Pozycja_1.png"
        />
      </div>

      <div ref={table} className="absolute left-[100px] bottom-0">
        <img
          className="w-[600px]"
          src="/assets/slides/0400/img/stolik_z_pucharem.png"
        />
      </div>

      <IconWrapper innerRef={icon_volume} width="40px" x={500} y={200}>
        <img src="/assets/slides/0000/img/icon_volume.svg" />
      </IconWrapper>

      <IconWrapper innerRef={icon_list} width="40px" x={600} y={300}>
        <img src="/assets/slides/0000/img/icon_list.svg" />
      </IconWrapper>

      <IconWrapper innerRef={icon_play} width="40px" x={520} y={400}>
        <img src="/assets/slides/0000/img/icon_play.svg" />
      </IconWrapper>
      <Box className="w-[250px] absolute right-0 bottom-[150px]">
        <Typography ref={prizesHeader} variant="h4" id="nagrody_header_0400">
          Nagrody
        </Typography>
        <Typography ref={prizesBody}>
          Opis - czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się,
          że uczenie się było do tej pory błędnie robione.
        </Typography>
      </Box>
    </Slide>
  );
};

export default Mtc05Main;
