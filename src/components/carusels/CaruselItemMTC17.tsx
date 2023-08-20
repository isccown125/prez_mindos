import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import { memo } from "react";
import classNames from "classnames";

const CaruselItemMTC17 = memo(
  ({ data, dataIndex, slideIndex }: StackedCarouselSlideProps) => {
    if (!data && !dataIndex) return null;

    const slide = data[dataIndex];
    const classes = classNames(
      "transition-opacity h-[150px] flex justify-center items-center",
      {
        "opacity-50": slideIndex === 1 || slideIndex === -1,
        "bg-[#ffffff] rounded-[50%]": slideIndex === 0,
      }
    );

    if (slide)
      return (
        <div draggable={false} className="relative w-full h-full ">
          <div className={classes}>
            <img
              draggable={false}
              style={{ width: "200px" }}
              src={slide.imgUrl}
            />
          </div>

          {slide.label && <div>{slide.label}</div>}
        </div>
      );
  }
);

export default CaruselItemMTC17;
