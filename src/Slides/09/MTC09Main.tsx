import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { Box, Typography } from "@mui/material";
import { getAbsolutePath } from "../../utils/functions";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import IconWrapper from "../../components/IconWrapper";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC09Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(8, 0);

  const edwart = useRef<HTMLDivElement>(null);
  const sunbed = useRef<HTMLDivElement>(null);
  const text_container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 1 });
      const tl4 = gsap.timeline({ delay: 1 });
      const tl2 = gsap.timeline({ delay: 1.4 });
      const tl3 = gsap.timeline({ delay: 1.15 });

      tl1.from(text_container.current, { x: -300, opacity: 0 });
      tl2.from(edwart.current, {
        duration: 1,
        y: 500,
        opacity: 0,
        ease: "circ.out",
      });
      tl3.from(sunbed.current, {
        duration: 1,
        y: 550,
        opacity: 0,
        ease: "circ.out",
      });
      tl4.from(icon_volume.current, {
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
      backgroundImage={[
        getAbsolutePath().coreUrl + "/assets/slides/0900/polanka.png",
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png",
      ]}
      backgroundSize="180%"
      backgroundPosition="30% 90%"
    >
      {showContent.current && (
        <SectionContent>
          <div ref={sunbed} className="absolute bottom-[-50px] right-[-155px]">
            <img
              className="h-[750px]"
              src={getAbsolutePath().coreUrl + "/assets/slides/0900/lezak.png"}
            />
          </div>
          <div ref={edwart} className=" bottom-[-60px] right-[100px] absolute">
            <img
              className="w-[250px]"
              src={getAbsolutePath().coreUrl + "/assets/slides/0900/Edwart.png"}
            />
          </div>
          <IconWrapper
            innerRef={icon_volume}
            width={50}
            height={50}
            x={500}
            y={400}
          >
            <img
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/icons/icon_volume.svg"
              }
            />
          </IconWrapper>
          <Box
            ref={text_container}
            className="absolute left-[0px] bottom-[90px] w-[360px] text-left"
          >
            <Typography ref={header} variant="h4">
              Poznaj Edwarta
            </Typography>
            <Typography ref={body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate vero odit deleniti, molestias explicabo eos dolorem,
              dignissimos tempora laudantium sapiente est ducimus praesentium
              sequi ipsum, tenetur quod reiciendis cumque commodi?
            </Typography>
          </Box>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC09Main;
