import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { getAbsolutePath } from "../../utils/functions";
import CaruselItem from "../../components/carusels/CaruselItem";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";

const data = [
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1100/food.png",
    label: "jedzenie",
    heightImg: 240,
  },
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1100/czas.png",
    label: "czas",
    heightImg: 240,
  },
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1100/koszty.png",
    label: "koszty",
    heightImg: 240,
  },
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1100/hotel1.png",
    label: "hotel",
    heightImg: 240,
  },
  {
    imgUrl: getAbsolutePath().coreUrl + "/assets/slides/1100/car.png",
    label: "dojazd",
    heightImg: 200,
  },
];

const MTC04Mindos = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useSynchronizeWithReveal();

  const caruselRef = useRef();

  const carusel = useRef<HTMLDivElement>(null);
  const pagination = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({ delay: 1 });
      tl1.from(carusel.current, { opacity: 0 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png"
      }
    >
      <div
        ref={carusel}
        className="relative z-30 flex h-full items-center justify-center"
      >
        <ResponsiveContainer
          carouselRef={caruselRef}
          render={(parentWidth, caruselRef) => (
            <>
              <StackedCarousel
                fadeDistance={0}
                height={400}
                ref={caruselRef}
                carouselWidth={parentWidth}
                maxVisibleSlide={5}
                slideWidth={350}
                slideComponent={CaruselItem}
                data={data}
                useGrabCursor={false}
                onActiveSlideChange={(activeSlide) => {
                  setActiveSlide(activeSlide);
                }}
              />
              <div
                ref={pagination}
                className="flex gap-1 justify-center items-center"
              >
                <IconButton onClick={() => caruselRef?.current?.goBack()}>
                  <ArrowBackIosIcon />
                </IconButton>
                <div className="flex gap-5">
                  {data.map((_, index) => (
                    <div
                      className={`w-[10px] h-[10px] ${
                        activeSlide === index ? "bg-yellow" : "bg-black"
                      } rounded-[50%]`}
                    ></div>
                  ))}
                </div>

                <IconButton onClick={() => caruselRef?.current?.goNext()}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </>
          )}
        />
      </div>
    </Slide>
  );
};

export default MTC04Mindos;
