import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { Box, Typography } from "@mui/material";
import { getAbsolutePath } from "../../utils/functions";
import HexagonChart from "../../components/charts/hexagon-chart/HexagonChart";
import { useRef, useLayoutEffect } from "react";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { gsap } from "gsap";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const MTC13Main = () => {
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(12, 0);

  const hexagon = useRef<HTMLDivElement>(null);
  const fillChart1 = useRef<HTMLDivElement>(null);
  const fillChart2 = useRef<HTMLDivElement>(null);
  const fillChart3 = useRef<HTMLDivElement>(null);
  const fillChart4 = useRef<HTMLDivElement>(null);
  const fillChart5 = useRef<HTMLDivElement>(null);
  const chartContainer = useRef<HTMLDivElement>(null);
  const chartBg = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 1 });
      const tl2 = gsap.timeline({ delay: 3 });
      const tl3 = gsap.timeline({ delay: 3 });
      const tl4 = gsap.timeline({ delay: 3 });
      const tl5 = gsap.timeline({ delay: 3 });
      const tl6 = gsap.timeline({ delay: 3 });
      tl1
        .from(hexagon.current, { opacity: 0, x: -300 })
        .from(chartBg.current, { width: 0, x: -300 })
        .from(chartContainer.current, { width: 0, opacity: 0 })
        .from(header.current, {
          x: 300,
          opacity: 0,
          ease: "back.out(4)",
        })
        .from(body.current, { opacity: 0, x: 300, ease: "back.out(4)" });
      tl2.from(fillChart1.current, { width: 0 });
      tl3.from(fillChart2.current, { width: 0 });
      tl4.from(fillChart3.current, { width: 0 });
      tl5.from(fillChart4.current, { width: 0 });
      tl6.from(fillChart5.current, { width: 0 });
    });
    return () => ctx.revert();
  });

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png"
      }
    >
      {showContent.current && (
        <SectionContent>
          <div>
            <div ref={hexagon} className="absolute top-[-200px] left-0 z-10">
              <img
                className="h-[1000px]"
                src={
                  getAbsolutePath().coreUrl + "/assets/slides/1300/hexagon.png"
                }
              />
            </div>
            <Box className="absolute z-20 text-left right-[100px] top-[140px]">
              <Typography ref={header} variant="h4">
                Umiejętności
              </Typography>
              <Typography ref={body}>
                Hexagony z umiejętnościami - fajna edukacja <br /> wybrać 5
                przykładowych umiejętności do heksagonu
              </Typography>
            </Box>
            <Box
              ref={chartBg}
              className="bg-yellow w-[550px] h-[280px] absolute right-[20px] bottom-[60px] rounded-xl"
            >
              <div
                ref={chartContainer}
                className="flex flex-col w-full h-full items-end justify-center pr-[50px] gap-2"
              >
                <HexagonChart
                  fillRef={fillChart1}
                  label="Podstawowe informacje"
                  fill={52}
                />
                <HexagonChart
                  fillRef={fillChart2}
                  label="Koncentracja"
                  fill={15}
                />
                <HexagonChart
                  fillRef={fillChart3}
                  label="Sztuka robienia Sushi"
                  fill={23}
                />
                <HexagonChart
                  fillRef={fillChart4}
                  label="Robienie kebabów"
                  fill={0}
                />
                <HexagonChart
                  fillRef={fillChart5}
                  label="Organizacja pracy w kuchni"
                  fill={35}
                />
              </div>
            </Box>
          </div>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC13Main;
