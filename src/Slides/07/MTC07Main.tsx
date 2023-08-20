import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import IconWrapper from "../../components/IconWrapper";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { getAbsolutePath } from "../../utils/functions";

const Mtc07Main = () => {
  useSynchronizeWithReveal();

  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);
  const text4 = useRef<HTMLDivElement>(null);
  const text5 = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);
  const icon_list = useRef<HTMLDivElement>(null);
  const icon_play = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(text1.current, { duration: 0.3, opacity: 0 })
        .from(text2.current, { duration: 0.3, opacity: 0 })
        .from(text3.current, { duration: 0.3, opacity: 0 })
        .from(text4.current, { duration: 0.3, opacity: 0 })
        .from(text5.current, { duration: 0.3, opacity: 0 });

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
      tlIcon3.from(icon_volume.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
    });

    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl +
        "/assets/slides/backgrounds/biurko-sideview.png"
      }
    >
      <Box>
        <div
          ref={text1}
          className="font-bold text-xl absolute top-[50px] left-[200px]"
        >
          Produktywność
        </div>
        <div
          ref={text2}
          className="font-bold text-xl absolute top-[200px] left-[150px]"
        >
          Muzyka
        </div>
        <div
          ref={text3}
          className="absolute right-[350px] bottom-[100px] text-xl font-bold"
        >
          Notatki
        </div>
        <div
          ref={text4}
          className="absolute text-xl font-bold right-[0] top-[400px]"
        >
          Woda
        </div>
        <div
          ref={text5}
          className="absolute text-xl font-bold right-[270px] top-[250px]"
        >
          Kofeina
        </div>
      </Box>

      <IconWrapper innerRef={icon_volume} width={45} x={500} y={20}>
        <img
          src={
            getAbsolutePath().coreUrl + "/assets/slides/icons/icon_volume.svg"
          }
        />
      </IconWrapper>

      <IconWrapper innerRef={icon_list} width={45} x={450} y={150}>
        <img
          src={getAbsolutePath().coreUrl + "/assets/slides/icons/icon_list.svg"}
        />
      </IconWrapper>

      <IconWrapper innerRef={icon_play} width={45} x={470} y={330}>
        <img
          src={getAbsolutePath().coreUrl + "/assets/slides/icons/icon_play.svg"}
        />
      </IconWrapper>
    </Slide>
  );
};

export default Mtc07Main;
