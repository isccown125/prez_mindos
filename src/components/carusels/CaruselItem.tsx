import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import { memo } from "react";
import classNames from "classnames";

const CaruselItem = memo(
  ({ data, dataIndex, slideIndex }: StackedCarouselSlideProps) => {
    if (!data && !dataIndex) return null;

    const slide = data[dataIndex];
    const classes = classNames(
      `transition-opacity h-[${[slide.slideHeight]}px]`,
      {
        "opacity-50": slideIndex === 2 || slideIndex === -2,
        "opacity-70": slideIndex === 1 || slideIndex === -1,
      }
    );
    const imgClasses = classNames("transition-transform", {
      "scale-75": slideIndex === 2 || slideIndex === -2,
      "scale-[110%]": slideIndex === 0,
      "scale-90": slideIndex === 1 || slideIndex === -1,
    });

    if (slide)
      return (
        <div
          draggable={false}
          className="relative w-full h-full flex flex-col justify-center items-center"
        >
          <div className={classes}>
            <img
              className={`absolute left-[50%] translate-x-[-50%] top-[10%] transalte-y-[-10%] ${imgClasses}`}
              draggable={false}
              style={{ height: slide.heightImg }}
              src={slide.imgUrl}
            />
          </div>

          {slide.label && <div>{slide.label}</div>}
        </div>
      );
  }
);

export default CaruselItem;
