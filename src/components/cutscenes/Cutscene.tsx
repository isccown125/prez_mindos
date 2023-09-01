import {
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
  RefObject,
} from "react";
import { createPortal } from "react-dom";
import { getAbsolutePath } from "../../utils/functions";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import useCutscenes from "../../hooks/useCutscenes";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideCutscene,
  showContent,
  showCutscene,
  stopPlaying,
} from "../../store/slices/cutscenes-slice";

interface Props {
  children?: React.ReactNode;
  showUI?: boolean;
  cutsceneRef?: RefObject<HTMLVideoElement>;
  setCutscenePath?: () => void;
  openCutscene?: (cb: () => void) => void;
}

const Cutscene = ({
  children,
  showUI = true,
  openCutscene,
  cutsceneRef,
}: Props) => {
  const [showPrevButton, setShowPrevButton] = useState<boolean>(true);
  const [showNextButton, setShowNextButton] = useState<boolean>(true);

  const cutsceneState = useAppSelector((state) => state.cutscenes);
  const { isContentVisible, isCutsceneVisible, isPlaying, currentCutscene } =
    cutsceneState;

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isCutsceneVisible) {
        dispatch(showContent());
        const tl1 = gsap.timeline();
        tl1.to(contentLayerRef.current, { duration: 0.3, opacity: 1 });
      }
    });

    return () => ctx.revert();
  }, [dispatch, isCutsceneVisible]);

  const contentLayerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {isCutsceneVisible &&
        createPortal(
          <div className="fixed z-30 inset-0 flex w-full h-full bg-focusZone">
            <video
              ref={cutsceneRef}
              onEnded={() => dispatch(stopPlaying())}
              muted
              autoPlay={isPlaying}
              src={currentCutscene?.path}
              className="flex w-full absolute inset-0"
            ></video>
            {isContentVisible && (
              <div
                ref={contentLayerRef}
                className="absolute left-0 top-0 w-full h-full flex z-40"
                style={{ opacity: 0 }}
              >
                <div className="absolute flex w-full h-full left-0 top-0 z-40">
                  {currentCutscene?.render()}
                </div>
                {showUI && (
                  <div className="absolute flex w-full h-full inset-0">
                    {showPrevButton && (
                      <div className="absolute z-40 bottom-0 left-0 bg-yellow">
                        <Button onClick={() => dispatch(hideCutscene())}>
                          Zamknij
                        </Button>
                      </div>
                    )}
                    {showNextButton && (
                      <div className="absolute z-40 bottom-0 right-0 bg-yellow">
                        <Button onClick={() => dispatch(showCutscene())}>
                          Przejdz dalej
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>,
          document.getElementById("cutscenes") as HTMLDivElement
        )}
    </>
  );
};

export default Cutscene;
