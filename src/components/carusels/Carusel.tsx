import {
  useRef,
  useLayoutEffect,
  useEffect,
  useReducer,
  useState,
  RefObject,
} from "react";
import { nextCaruselItem, prevCaruselItem } from "../../utils/functions";
import CaruselItem from "./CaruselItem";
import "./Carusel.css";
import { Button } from "@mui/material";
import { gsap } from "gsap";

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

interface Props {
  children: React.ReactNode;
  itemsWidth?: number;
  itemsHeight?: number;
  startItem?: number;
}

interface CaruselState {
  offset: number;
  active: number;
  desired: number;
  length: number;
}
export type CaruselActionTypes =
  | { type: "jump"; desired: number }
  | { type: "next"; length: number }
  | { type: "prev"; length: number }
  | { type: "done" }
  | { type: "drag"; offset: number };

const caruselStateReducer = (
  state: CaruselState,
  action: CaruselActionTypes
) => {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired,
      };
    case "next":
      return {
        ...state,
        desired: nextCaruselItem(action.length, state.active),
      };
    case "prev":
      return {
        ...state,
        desired: prevCaruselItem(action.length, state.active),
      };
    case "done":
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case "drag":
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
};

const Carusel = ({ children, itemsWidth, itemsHeight, startItem }: Props) => {
  const caruselContainer = useRef<HTMLDivElement>(null);
  const ITEMS_WIDTH = itemsWidth ? itemsWidth : 400;
  const CONTAINER_WIDTH = ITEMS_WIDTH * Array.from(children).length;

  const [caruselItems, setCaruselItems] = useState<React.ReactElement[]>([]);

  const initCarusel = (): ReturnType<CaruselState> => {
    return {};
  };

  const [caruselState, dispatchCaruselState] = useReducer(caruselStateReducer, {
    offset: 0,
    active: startItem ?? 0,
    desired: 0,
    length: 0,
  });
  useLayoutEffect(() => {
    const view = document
      .querySelector(".caruserl-view")
      ?.getBoundingClientRect();
    const activeElement = document
      .querySelector(".active")
      ?.getBoundingClientRect();
    const container = caruselContainer.current?.getBoundingClientRect();
    const activeElementX = activeElement?.x;
    const containerX = container?.x;
    if (containerX && activeElementX && view)
      gsap.to(caruselContainer.current, {
        x:
          view?.x +
          view?.width / 2 -
          containerX -
          ITEMS_WIDTH / 2 +
          activeElementX,
      });
  }, []);
  1;

  const nextButtonHandler = () => {
    dispatchCaruselState({
      type: "next",
      length: Array.from(children).length - 1,
    });
  };

  useEffect(() => {
    const view = document
      .querySelector(".caruserl-view")
      ?.getBoundingClientRect();
    const activeElement = document
      .querySelector(".active")
      ?.getBoundingClientRect();
    const container = caruselContainer.current?.getBoundingClientRect();
    const activeElementX = activeElement?.x;
    const containerX = container?.x;
    const centerIndex = Array.from(children).length / 2;
    const cos = caruselContainer.current?.querySelector(".active");
    console.log(cos?.getBoundingClientRect());

    if (containerX && activeElementX && view)
      gsap.to(caruselContainer.current, {
        x:
          -(view?.x + view?.width / 2 - activeElement.width / 2) *
          caruselState.desired,
      });

    dispatchCaruselState({ type: "done" });
  }, [caruselState.desired]);

  useEffect(() => {
    if (!Array.isArray(children)) {
      setCaruselItems([]);
      return;
    }
    setCaruselItems([...children]);
  }, [children]);

  if (caruselItems.length > 0)
    return (
      <div className="w-full flex flex-col justify-center items-center h-[500px] translate-y-center relative  overflow-hidden caruserl-view">
        <div
          ref={caruselContainer}
          style={{ width: CONTAINER_WIDTH }}
          className="flex gap-[20px] absolute left-0"
        >
          {caruselItems.map((child, index) => {
            return (
              <>
                {index !== caruselState.active - 1 &&
                  index !== caruselState.active + 1 &&
                  index !== caruselState.active && (
                    <CaruselItem width={ITEMS_WIDTH} height={itemsHeight}>
                      {child}
                    </CaruselItem>
                  )}
                {index === caruselState.active && (
                  <CaruselItem
                    width={ITEMS_WIDTH}
                    height={itemsHeight}
                    className="active"
                  >
                    {child}
                  </CaruselItem>
                )}
                {index === caruselState.active - 1 && (
                  <CaruselItem
                    width={ITEMS_WIDTH}
                    height={itemsHeight}
                    className="prev"
                  >
                    {child}
                  </CaruselItem>
                )}
                {index === caruselState.active + 1 && (
                  <CaruselItem
                    width={ITEMS_WIDTH}
                    height={itemsHeight}
                    className="next"
                  >
                    {child}
                  </CaruselItem>
                )}
              </>
            );
          })}
        </div>
        <div>
          <Button>prev</Button>
          <Button onClick={nextButtonHandler}>next</Button>
        </div>
      </div>
    );
};

export default Carusel;
