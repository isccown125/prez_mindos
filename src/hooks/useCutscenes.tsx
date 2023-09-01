import { useReducer, useState } from "react";
import { gsap } from "gsap";
import { getAbsolutePath } from "../utils/functions";

type cutscenesReducerActions =
  | { type: "play" }
  | { type: "replay" }
  | { type: "hide" }
  | { type: "show" }
  | { type: "stop" }
  | { type: "show-content" }
  | { type: "hide-content" };

interface CutscenesState {
  play: boolean;
  visible: boolean;
  showContent: boolean;
}

const cutsceneReducer = (
  state: CutscenesState,
  action: cutscenesReducerActions
): CutscenesState => {
  switch (action.type) {
    case "play":
      return { ...state, play: true, visible: true };
    case "replay":
      return { ...state, play: true };
    case "show":
      return { ...state, visible: true };
    case "hide":
      return { ...state, visible: false, play: false };
    case "hide-content":
      return { ...state, showContent: false };
    case "show-content":
      return { ...state, showContent: true };
    case "stop":
      return { ...state, play: false };
    default:
      return state;
  }
};

type addCutscene = {
  content: React.ReactNode;
  path: string;
  id: string;
};

const cutsceneState = {
  play: true,
  visible: true,
  showContent: true,
};

const useCutscenes = () => {
  const [cutscenesState, dispatchCutscene] = useReducer(
    cutsceneReducer,
    cutsceneState
  );

  const [currentCutscenePath, setCurrentCutscenePath] = useState<string>("");
  const [cutsceneQueue, setCutsceneQueue] = useState<addCutscene[]>([]);

  const showContentHandler = () => {
    setShowContent(true);
  };

  const setCutscenePath = (path: string) => {
    setCurrentCutscenePath(() => path);
  };

  const addCutscene = (...cutscene: addCutscene[]) => {
    setCutsceneQueue(() => [...cutsceneQueue, ...cutscene]);
  };

  const play = () => {
    dispatchCutscene({ type: "play" });
  };
  const hideCutscene = () => {
    dispatchCutscene({ type: "hide" });
  };
  const showCutscene = () => {
    dispatchCutscene({ type: "show" });
  };
  const showContent = () => {
    dispatchCutscene({ type: "show-content" });
  };
  const open = () => {
    dispatchCutscene({ type: "play" });
  };
  const renderCutscene = () => {};

  return {
    play,
    hideCutscene,
    showContent,
    open,
    showCutscene,
    currentCutscenePath,
    isPlaying: cutscenesState.play,
    isShowContent: cutscenesState.showContent,
    isCutsceneVisible: cutscenesState.visible,
    cutsceneQueue,
    addCutscene,
  };
};

export default useCutscenes;
