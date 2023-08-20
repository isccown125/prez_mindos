import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import { memo } from "react";
import classNames from "classnames";

const CaruselItem = memo(
  ({ data, dataIndex, slideIndex }: StackedCarouselSlideProps) => {
    if (!data && !dataIndex) return null;

    const slide = data[dataIndex];
    const classes = classNames("transition-opacity", {
      "opacity-50": slideIndex === 2 || slideIndex === -2,
      "opacity-70": slideIndex === 1 || slideIndex === -1,
    });

    if (slide)
      return (
        <div
          draggable={false}
          className="relative w-full h-full flex flex-col justify-center items-center"
        >
          <div className={classes}>
            <img
              draggable={false}
              style={{ width: slide.widthImg, height: slide.heightImg }}
              src={slide.imgUrl}
            />
          </div>

          {slide.label && <div>{slide.label}</div>}
        </div>
      );
  }
);

export default CaruselItem;
