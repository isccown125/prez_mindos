import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import { useEffect, useRef, useState } from "react";
import CaruselItemMTC17 from "../../components/carusels/CaruselItemMTC17";
import OutlineButton from "../../components/buttons/OutlineButton";

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

  useEffect(() => {
    console.log(currentCenterIndex);
  }, [currentCenterIndex]);

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
      <div className="absolute bottom-[-100px] left-[-350px] w-[1400px]">
        <img
          style={{ width: "1500px" }}
          src={
            getAbsolutePath().coreUrl +
            "/assets/slides/1700/elon_edwart_table.png"
          }
        />
      </div>
      <div className="absolute left-[400px] top-[-100px]">
        <img
          className="w-[40px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1700/light.png"}
        />
      </div>

      <div className="bg-yellow w-[350px] h-[80%] translate-y-center absolute right-0">
        <div className="relative w-full flex items-center justify-center mt-5">
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
                      className="text-[18px]"
                      onClick={() => caruselRef?.current?.goBack()}
                    >
                      POPRZEDNI
                    </OutlineButton>
                    <OutlineButton
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
    </Slide>
  );
};

export default MTC17Main;
