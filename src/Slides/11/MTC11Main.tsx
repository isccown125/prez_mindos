import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { getAbsolutePath } from "../../utils/functions";
import CaruselItem from "../../components/carusels/CaruselItem";

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
  const caruselRef = useRef();

  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-green.png"
      }
    >
      <div className="relative z-30 flex h-full items-center justify-center">
        <ResponsiveContainer
          carouselRef={caruselRef}
          render={(parentWidth, caruselRef) => (
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
            />
          )}
        />
      </div>
    </Slide>
  );
};

export default MTC04Mindos;
