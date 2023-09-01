import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { Typography } from "@mui/material";
import { getAbsolutePath } from "../../utils/functions";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import IconWrapper from "../../components/IconWrapper";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC10Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(9, 0);

  const edwart = useRef<HTMLDivElement>(null);
  const sunbed = useRef<HTMLDivElement>(null);
  const left_container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const icon_volume = useRef<HTMLDivElement>(null);
  const icon_list = useRef<HTMLDivElement>(null);
  const icon_play = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 1 });
      const tl4 = gsap.timeline({ delay: 1 });
      const tl5 = gsap.timeline({ delay: 0.5 });
      const tl2 = gsap.timeline({ delay: 1.4 });
      const tl3 = gsap.timeline({ delay: 1.15 });

      tl5.from(left_container.current, { duration: 0.4, x: -200, opacity: 0 });
      tl1.from(header.current, {
        x: -200,
        duration: 0.4,
        opacity: 0,
        ease: "back.out(5)",
      });
      tl4.from(body.current, {
        delay: 0.2,
        duration: 0.4,
        x: -200,
        opacity: 0,
        ease: "back.out(5)",
      });

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
      backgroundImage={[
        getAbsolutePath().coreUrl + "/assets/slides/1000/polanka.png",
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png",
      ]}
      backgroundSize="180%"
      backgroundPosition="30% 90%"
    >
      {showContent.current && (
        <SectionContent>
          <div ref={sunbed} className="absolute bottom-[-50px] right-[-155px]">
            <img className="h-[750px]" src="/assets/slides/1000/lezak.png" />
          </div>
          <div ref={edwart} className=" bottom-[-60px] right-[100px] absolute">
            <img
              className="w-[250px]"
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/1000/zastanawia_sie.png"
              }
              alt=""
            />
          </div>
          <IconWrapper innerRef={icon_volume} width={45} x={500} y={200}>
            <img
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/icons/icon_volume.svg"
              }
            />
          </IconWrapper>

          <IconWrapper innerRef={icon_list} width={45} x={330} y={400}>
            <img
              src={
                getAbsolutePath().coreUrl + "/assets/slides/icons/icon_list.svg"
              }
            />
          </IconWrapper>

          <IconWrapper innerRef={icon_play} width={45} x={400} y={500}>
            <img
              src={
                getAbsolutePath().coreUrl + "/assets/slides/icons/icon_play.svg"
              }
            />
          </IconWrapper>

          <div
            ref={left_container}
            className="bg-yellow w-[330px] h-[90%] top-[30px] absolute left-[-20px] text-purple text-left p-5"
          >
            <Typography
              ref={header}
              variant="h4"
              style={{ textTransform: "none", fontSize: "0.9em" }}
              className="text-start"
            >
              <span className="text-purple font-extrabold">
                Strefa relaksu{" "}
              </span>
            </Typography>
            <Typography
              ref={body}
              className="text-purple text-start"
              fontWeight="700"
            >
              Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się że
              uczenie się było do tej pory błędnie robione,
            </Typography>
          </div>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC10Main;
