import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import { Box, Typography } from "@mui/material";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC12Mindos = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(11, 0);

  const card = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const divider = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 0.6 });
      const tl2 = gsap.timeline({ delay: 1.4 });
      const tl3 = gsap.timeline({ delay: 1.4 });
      const tl4 = gsap.timeline({ delay: 1.2 });

      tl1.from(card.current, { duration: 0.4, width: 0, opacity: 0 });
      tl2.from(logo.current, { duration: 0.5, x: -200, opacity: 0 });
      tl3
        .from(header.current, { duration: 0.5, x: 600, opacity: 0 })
        .from(text.current, { duration: 0.5, x: 600, opacity: 0 });

      tl4.from(divider.current, { duration: 0.4, height: 0, opacity: 0 });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundSize={["100% 100%", "cover"]}
      backgroundImage={[
        getAbsolutePath().coreUrl + "/assets/slides/1200/school-items.png",
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png",
      ]}
    >
      {showContent.current && (
        <SectionContent>
          <div className="flex w-full h-full justify-center items-center">
            <Box
              ref={card}
              className=" max-w-[800px] flex w-full h-[300px] rounded-xl border-4 border-white justify-center items-center px-5"
            >
              <div ref={logo} className="pr-5 w-[30%]">
                <img
                  className="w-[500px]"
                  src={
                    getAbsolutePath().coreUrl +
                    "/assets/slides/1200/logo_mindos.png"
                  }
                />
              </div>
              <div
                ref={divider}
                style={{ background: "#ffffff" }}
                className="w-[4px] h-[70%]"
              ></div>
              <div className="px-10 text-left w-[60%] flex flex-col">
                <div ref={header}>Nauka online</div>
                <Typography margin={0} padding={0} ref={text}>
                  Chcesz sprytnie się uczyć? Edwart pokaże i kilka trików dzięki
                  którym nie spędzisz wieeelu nudnych godzin przed książkami
                  tylko sprytnie i szybko przyswoisz informacje!
                </Typography>
              </div>
            </Box>
          </div>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC12Mindos;
