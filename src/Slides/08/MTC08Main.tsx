import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { getAbsolutePath } from "../../utils/functions";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC08Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(7, 0);
  const title = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const podcast_container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl = gsap.timeline({ delay: 1 });

      tl.from(container.current, { duration: 0.3, opacity: 0 })
        .from(title.current, {
          duration: 0.4,
          x: 500,
          opacity: 0,
          ease: "back.out",
        })
        .from(body.current, {
          duration: 0.4,
          x: 500,
          opacity: 0,
          ease: "back.out",
        })
        .from(podcast_container.current, { duration: 1, y: 560, scale: 0 });
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
      {showContent.current && (
        <SectionContent>
          <Box
            ref={container}
            className="w-full h-[90%] rounded-2xl bg-yellow absolute translate-y-center py-3 px-8 overflow-hidden"
          >
            <Box className="w-full text-left">
              <Typography ref={title}>
                <span className="text-purple text-3xl text-left font-bold">
                  Lista podcastów o produktywności
                </span>
              </Typography>
              <Typography ref={body}>
                <span className="text-purple text-left font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, quibusdam aut consectetur itaque recusandae officia
                  laborum deserunt facere rem animi blanditiis? Laborum iste
                  adipisci asperiores nam, distinctio laboriosam hic numquam.
                </span>
              </Typography>
            </Box>
            <Stack
              ref={podcast_container}
              className="overflow-y-auto max-h-[350px] gap-4 pr-3"
            >
              <Box className="border-2 border-purple rounded-xl text-purple shadow-md shadow-focusZone items-center h-min flex justify-between">
                <img
                  style={{ margin: 0 }}
                  className="h-[70px]"
                  src={
                    getAbsolutePath().coreUrl +
                    "/assets/slides/backgrounds/biurko-sideview.png"
                  }
                />
                <Typography>cupcakes</Typography>
                <Typography>09.06.2018</Typography>
                <Box className="flex">
                  <Button>dsa</Button>
                  <Button>dsa</Button>
                </Box>
                <Button>Play</Button>
              </Box>
            </Stack>
          </Box>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC08Main;
