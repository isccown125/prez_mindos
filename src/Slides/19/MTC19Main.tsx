import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC19Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(18, 0);
  const handWithPhone = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 0.6 });

      tl1
        .from(handWithPhone.current, { x: -300, opacity: 0, y: 300 })
        .from(logo.current, { scale: 0, opacity: 0 });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-purple.png"
      }
    >
      {showContent.current && (
        <SectionContent>
          <div
            ref={handWithPhone}
            className="absolute left-[-250px] bottom-[-100px]"
          >
            <img
              className="h-[600px]"
              src={
                getAbsolutePath().coreUrl + "/assets/slides/1900/phone3d.png"
              }
            />
          </div>
          <div ref={logo} className="absolute right-[100px] top-[150px]">
            <img
              className="h-[60px]"
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/1900/mindos_logo2.png"
              }
            />
          </div>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC19Main;
