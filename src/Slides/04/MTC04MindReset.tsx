import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";

const Mtc04MindReset = () => {
  useSynchronizeWithReveal();

  const elon = useRef<HTMLDivElement>(null);
  const fotel = useRef<HTMLDivElement>(null);
  const text_header = useRef<HTMLDivElement>(null);
  const text_body = useRef<HTMLDivElement>(null);
  const icon1 = useRef<HTMLDivElement>(null);
  const icon2 = useRef<HTMLDivElement>(null);
  const icon3 = useRef<HTMLDivElement>(null);
  const left_col = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      const tl2 = gsap.timeline({ delay: 0.35 });
      const tl3 = gsap.timeline({ delay: 0.8 });
      const tl4 = gsap.timeline({ delay: 1.0 });

      tl.from(fotel.current, {
        duration: 1.4,
        y: -200,
        opacity: 0,
        ease: "power2.out",
      });
      tl2.from(elon.current, {
        duration: 1.4,
        y: -200,
        opacity: 0,
        ease: "power2.out",
      });
      tl3.from(text_header.current, { durration: 0.6, opacity: 0 });
      tl4.from(text_body.current, { durration: 1.0, opacity: 0 });

      const iconsDelay = 1.5;

      const tlIcon1 = gsap.timeline({ delay: iconsDelay });
      const tlIcon2 = gsap.timeline({ delay: iconsDelay + 0.3 });
      const tlIcon3 = gsap.timeline({ delay: iconsDelay + 0.2 });

      tlIcon1.from(icon1.current, {
        durration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon2.from(icon2.current, {
        durration: 0.4,
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
        .from(left_col.current, {
          durration: 1.5,
          opacity: 0,
          y: -200,
          ease: "elastic.out(1, 0.4)",
        });
    });

    return () => ctx.revert();
  });

  return (
    <Slide backgroundImage="/assets/slides/0300/img/bgblue.png">
      <SectionContent>
        <div ref={icon1} className="absolute top-[150px] z-30 left-[350px]">
          <img
            className="w-[40px]"
            src="/assets/slides/0000/img/icon_volume.svg"
          />
        </div>
        <div ref={icon2} className="absolute z-30 bottom-[150px] right-[200px]">
          <img
            className="w-[40px]"
            src="/assets/slides/0000/img/icon_list.svg"
          />
        </div>
        <div ref={icon3} className="absolute z-30 bottom-[40px] left-[200px]">
          <img
            className="w-[40px]"
            src="/assets/slides/0000/img/icon_play.svg"
          />
        </div>
        <Box
          ref={left_col}
          className="absolute right-[0] bottom-[200px] w-[320px] text-left"
        >
          <Typography
            style={{ textTransform: "none" }}
            variant="h4"
            fontWeight="bold"
          >
            Strefa relaksu
          </Typography>
          <Typography>
            Opis - czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj
            się, że uczenie się było do tej pory błędnie robione.
          </Typography>
        </Box>
        <div
          ref={fotel}
          className="absolute right-[220px] bottom-[-200px]"
          style={{ transform: "translateX(-50%)" }}
        >
          <img
            className="w-[500px]"
            src="/assets/slides/0300/img/fotel-fronview-sluchawki.png"
          />
        </div>
        <div className="absolute bottom-[-80px] right-[200px]" ref={elon}>
          <img
            className="w-[450px]"
            src="/assets/slides/0000/img/Pozycja_1.png"
          />
        </div>
      </SectionContent>
    </Slide>
  );
};

export default Mtc04MindReset;
