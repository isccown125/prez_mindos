import Section from "../../components/reveal-components/Section.tsx";
import { Box, Typography } from "@mui/material";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";

const Mtc03AlphabetGame = () => {
  useSynchronizeWithReveal("2/0");

  const alphabetHeader = useRef<HTMLDivElement>(null);
  const alphabetText = useRef<HTMLDivElement>(null);
  const elon = useRef<HTMLImageElement>(null);
  const volumeIcon = useRef<HTMLDivElement>(null);
  const playIcon = useRef<HTMLDivElement>(null);
  const listIcon = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.7 });
      const tl2 = gsap.timeline({ delay: 1.0 });

      tl.from(alphabetHeader.current, { duration: 0.6, opacity: 0 });
      tl2.from(alphabetText.current, { duration: 1.6, opacity: 0 });

      const tl3 = gsap.timeline({ delay: 0.2 });

      tl3.from(elon.current, {
        duration: 1.6,
        y: 400,
        ease: "back.out",
      });

      const iconsDelay = 1.5;

      const tlIcon1 = gsap.timeline({ delay: iconsDelay });
      const tlIcon2 = gsap.timeline({ delay: iconsDelay + 0.3 });
      const tlIcon3 = gsap.timeline({ delay: iconsDelay + 0.2 });

      tlIcon1.from(volumeIcon.current, {
        duration: 0.4,
        opacity: 0,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon2.from(listIcon.current, {
        opacity: 0,
        duration: 0.4,
        scale: 0.3,
        ease: "back.out(4)",
      });
      tlIcon3.from(playIcon.current, {
        opacity: 0,
        duration: 0.4,
        scale: 0.3,
        ease: "back.out(4)",
      });
    });

    return () => ctx.revert();
  });

  return (
    <Section slideBackgroundImgUrl="/assets/slides/0200/img/bgred3.png">
      <SectionContent>
        <div className="relative flex w-full h-full">
          <div ref={volumeIcon} className="absolute left-[150px] top-[300px]">
            <img
              className="w-[40px]"
              src="/assets/slides/0000/img/icon_volume.svg"
            />
          </div>
          <div ref={listIcon} className="absolute left-[300px] top-[150px]">
            <img
              className="w-[40px]"
              src="/assets/slides/0000/img/icon_list.svg"
            />
          </div>
          <div ref={playIcon} className="absolute  left-[200px] top-[0px]">
            <img
              className="w-[40px]"
              src="/assets/slides/0000/img/icon_play.svg"
            />
          </div>
          <div className="absolute bottom-[-280px] translate-x-center flex w-[650px] ">
            <img ref={elon} src="/assets/slides/0000/img/Pozycja_1.png" />
          </div>
          <Box className="max-w-[300px] absolute top-[100px] right-0">
            <Typography
              ref={alphabetHeader}
              variant="h4"
              style={{ textTransform: "none" }}
            >
              Alfabet Game
            </Typography>
            <Typography ref={alphabetText} fontWeight="lighter">
              Opis się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się, że
              uczenie się było do tej pory błędnie robione.
            </Typography>
          </Box>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Mtc03AlphabetGame;
