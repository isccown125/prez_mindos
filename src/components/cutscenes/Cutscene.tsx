import { useLayoutEffect, useEffect, useRef, useState, RefObject } from "react";
import { createPortal } from "react-dom";
import { Button, CircularProgress } from "@mui/material";
import { gsap } from "gsap";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideCutscene,
  showContent,
  showCutscene,
  showUIAction,
  startPlaying,
  stopPlaying,
  videoIsLoaded,
  videoIsLoading,
} from "../../store/slices/cutscenes-slice";

const Cutscene = () => {
  const [showPrevButton] = useState<boolean>(true);
  const [showNextButton] = useState<boolean>(true);
  const cutsceneRef = useRef<HTMLDivElement>(null);

  const cutsceneState = useAppSelector((state) => state.cutscenes);
  const {
    showUI,
    isContentVisible,
    isPlaying,
    currentCutscene,
    isCutsceneVisible,
    isLoading,
  } = cutsceneState;

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isCutsceneVisible) {
        dispatch(showContent());
        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline();
        tl1.to(contentLayerRef.current, { duration: 0.3, opacity: 1 });
        tl2.to(cutsceneRef.current, { opacity: 1 });
      }
    });
    return () => ctx.revert();
  }, [isCutsceneVisible]);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isCutsceneVisible) {
        dispatch(showContent());
        const tl1 = gsap.timeline();
        tl1.to(contentLayerRef.current, { duration: 0.3, opacity: 1 });
      }
    });
    return () => ctx.revert();
  }, [showUI]);

  useEffect(() => {
    let timeoutID = 0;

    if (isPlaying)
      timeoutID = setTimeout(() => {
        videoRef?.current.play();
      }, 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [isPlaying]);

  const handleStartLoadVideo = () => {
    dispatch(videoIsLoading());
    dispatch(stopPlaying());
  };
  const handleVideoCanPlayThrough = () => {
    dispatch(videoIsLoaded());
    dispatch(startPlaying());
  };
  const handleVideoEnded = () => {
    dispatch(stopPlaying());
    dispatch(showContent());
    dispatch(showUIAction());
  };
  const handleLoadedVideo = () => {
    dispatch(videoIsLoaded());
    dispatch(startPlaying());
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const contentLayerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {isCutsceneVisible &&
        createPortal(
          <div
            className="fixed z-30 inset-0 flex w-full h-full bg-[rgba(0,0,0,0.8)]"
            style={{ opacity: 0 }}
            ref={cutsceneRef}
          >
            <video
              ref={videoRef}
              onEnded={handleVideoEnded}
              muted
              onWaiting={handleStartLoadVideo}
              onPlaying={handleLoadedVideo}
              onCanPlayThrough={handleVideoCanPlayThrough}
              src={currentCutscene?.path}
              className="flex w-[100vw] h-[100vh] absolute inset-0"
            ></video>

            {isLoading && (
              <div className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed">
                <CircularProgress
                  color="secondary"
                  translate="yes"
                  size={"150px"}
                />
              </div>
            )}
            {isContentVisible && (
              <div
                ref={contentLayerRef}
                className="absolute left-0 top-0 w-full h-full flex z-40"
                style={{ opacity: 0 }}
              >
                <div className="absolute flex w-full h-full left-0 top-0 z-40">
                  {currentCutscene?.render()}
                </div>
              </div>
            )}
            {showUI && (
              <div className="fixed flex w-full h-full z-50">
                <div className="relative w-full h-full">
                  {showPrevButton && (
                    <div className="absolute bottom-0 left-0 bg-yellow">
                      <Button
                        onClick={() => {
                          dispatch(hideCutscene());
                        }}
                      >
                        Zamknij
                      </Button>
                    </div>
                  )}
                  {showNextButton && (
                    <div className="absolute bottom-0 right-0 bg-yellow">
                      <Button onClick={() => dispatch(showCutscene())}>
                        Przejdz dalej
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>,
          document.getElementById("cutscenes") as HTMLDivElement
        )}
    </>
  );
};

export default Cutscene;
