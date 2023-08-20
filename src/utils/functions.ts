import { SwipeEventData } from "react-swipeable";
import { CaruselActionTypes } from "../components/carusels/Carusel";

export const getAbsolutePath = () => {
  return {
    coreUrl: ".",
  };
};

export const nextCaruselItem = (quantityItems: number, activeItem: number) => {
  if (quantityItems < 0) return 0;

  return quantityItems > activeItem ? activeItem + 1 : 0;
};
export const prevCaruselItem = (quantityItems: number, activeItem: number) => {
  if (quantityItems < 0) return 0;

  return 0 < activeItem ? activeItem - 1 : 0;
};

export function threshold(target: EventTarget | null) {
  const width = (target as HTMLElement).clientWidth;
  return width / 3;
}
export function swiped(
  e: SwipeEventData,
  dispatch: React.Dispatch<CaruselActionTypes>,
  length: number,
  dir: 1 | -1
) {
  const t = threshold(e.event.target);
  const d = dir * e.deltaX;

  if (d >= t) {
    dispatch({
      type: dir > 0 ? "next" : "prev",
      length,
    });
  } else {
    dispatch({
      type: "drag",
      offset: 0,
    });
  }
}
