import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { useRef, useState, useLayoutEffect } from "react";
import CaruselItemMTC17 from "../../components/carusels/CaruselItemMTC17";
import OutlineButton from "../../components/buttons/OutlineButton";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import useAnimate from "../../hooks/useAnimate";
import SectionContent from "../../components/reveal-components/SectionContent";

const data = [
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1700/rozpraszacz.png",
    heightImg: 150,
  },
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1700/Ponurak.png",
    heightImg: 150,
  },

  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1700/zlosnik.png",
    heightImg: 150,
  },
];

const MTC17Main = () => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState<
    number | undefined
  >(0);
  useSynchronizeWithReveal();
  const { animate, showContent } = useAnimate(16, 0);

  const tableWithElonAndEdwart = useRef<HTMLDivElement>(null);
  const light = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const button1 = useRef<HTMLButtonElement>(null);
  const button2 = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!animate.current) return;
      animate.current = false;
      const tl1 = gsap.timeline({ delay: 0.4 });
      const tl2 = gsap.timeline({ delay: 1 });
      tl1
        .from(tableWithElonAndEdwart.current, {
          x: -300,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(4)",
        })
        .from(light.current, { duration: 0.8, y: -300, opacity: 0 });
      tl2
        .from(rightCol.current, {
          duration: 0.5,
          x: 300,
          scale: 0,
          opacity: 0,
        })
        .from(content.current, { scale: 0, opacity: 0 })
        .from(button1.current, { scale: 0, opacity: 0, x: -200 })
        .from(button2.current, { scale: 0, opacity: 0, x: 200 });
    });
    return () => ctx.revert();
  });

  const caruselRef = useRef();
  const firstRender = useRef<"rendered" | null>(null);

  return (
    <Slide
      backgroundPosition={["-20% -20%", "center"]}
      backgroundSize={["70% 80%", "cover"]}
      backgroundImage={[
        getAbsolutePath().coreUrl + "/assets/slides/1700/bookshelf.png",
        getAbsolutePath().coreUrl +
          "/assets/slides/backgrounds/bg-darkblue.png",
      ]}
    >
      {showContent.current && (
        <SectionContent>
          <div
            ref={tableWithElonAndEdwart}
            className="absolute bottom-[-100px] left-[-350px] w-[1400px]"
          >
            <img
              style={{ width: "1500px" }}
              src={
                getAbsolutePath().coreUrl +
                "/assets/slides/1700/elon_edwart_table.png"
              }
            />
          </div>
          <div ref={light} className="absolute left-[400px] top-[-100px]">
            <img
              className="w-[40px]"
              src={getAbsolutePath().coreUrl + "/assets/slides/1700/light.png"}
            />
          </div>

          <div
            ref={rightCol}
            className="bg-yellow w-[350px] h-[80%] top-[50px] absolute right-0"
          >
            <div
              ref={content}
              className="relative w-full flex items-center justify-center mt-5"
            >
              <ResponsiveContainer
                carouselRef={caruselRef}
                render={(parentWidth, caruselRef) => {
                  if (firstRender.current === null) {
                    caruselRef?.current?.state.renderedSlides.find((slide) => {
                      if (slide.slideIndex === 0) {
                        console.log(slide);
                        setCurrentCenterIndex(() => slide.dataIndex);
                      }
                    });
                    firstRender.current = "rendered";
                  }
                  return (
                    <>
                      <StackedCarousel
                        ref={caruselRef}
                        carouselWidth={parentWidth}
                        maxVisibleSlide={3}
                        currentVisibleSlide={3}
                        slideComponent={CaruselItemMTC17}
                        fadeDistance={0}
                        slideWidth={150}
                        height={200}
                        data={data}
                        onActiveSlideChange={(centerIndex) =>
                          setCurrentCenterIndex(() => centerIndex)
                        }
                      />
                      {currentCenterIndex === 0 && <div>rozpraszacz</div>}
                      {currentCenterIndex === 1 && <div>ponurak</div>}
                      {currentCenterIndex === 2 && <div>zlosnik</div>}

                      <div className="flex gap-2 justify-center items-center">
                        <OutlineButton
                          ref={button1}
                          className="text-[18px]"
                          onClick={() => caruselRef?.current?.goBack()}
                        >
                          POPRZEDNI
                        </OutlineButton>
                        <OutlineButton
                          ref={button2}
                          onClick={() => caruselRef?.current?.goNext()}
                          className="text-[18px]"
                        >
                          NASTĘPNY
                        </OutlineButton>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </SectionContent>
      )}
    </Slide>
  );
};

export default MTC17Main;
