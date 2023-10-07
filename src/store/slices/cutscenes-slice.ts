import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAbsolutePath } from "../../utils/functions";
import { v4 as uuid } from "uuid";

type cutscene = {
  id: string;
  name: string;
  render: () => React.ReactNode;
  path: string;
};

interface State {
  cutscenesQueue: cutscene[];
  currentCutscene: cutscene | null;
  isPlaying: boolean;
  isContentVisible: boolean;
  isCutsceneVisible: boolean;
  isLoading: boolean;
  showUI: boolean;
}

const initialState: State = {
  currentCutscene: null,
  cutscenesQueue: [],
  isContentVisible: false,
  isCutsceneVisible: false,
  showUI: false,
  isLoading: false,
  isPlaying: false,
};

const cutscenesSlice = createSlice({
  name: "cutscenes",
  reducers: {
    addCutsceneToQueue(state, action: PayloadAction<cutscene[]>) {
      state.cutscenesQueue = [...state.cutscenesQueue, ...action.payload];
    },
    stopPlaying(state) {
      state.isPlaying = false;
    },
    startPlaying(state) {
      state.isPlaying = true;
    },
    showUIAction(state) {
      state.showUI = true;
    },
    hideUI(state) {
      state.showUI = false;
    },
    showCutscene(state) {
      state.isCutsceneVisible = true;
    },
    hideCutscene(state) {
      state.isCutsceneVisible = false;
      state.isPlaying = false;
      state.showUI = false;
    },
    openCutsceneAction(
      state,
      action: PayloadAction<{
        path: string;
        name: string;
        content: () => React.ReactNode;
      }>
    ) {
      state.currentCutscene = {
        id: uuid(),
        path: getAbsolutePath().coreUrl + action.payload.path,
        name: action.payload.name,
        render: action.payload.content,
      };
      state.isLoading = true;
      state.isContentVisible = false;
      state.isCutsceneVisible = true;
      state.isPlaying = true;
    },
    videoIsLoaded(state) {
      state.isLoading = false;
    },
    videoIsLoading(state) {
      state.isLoading = true;
    },
    showContent(state) {
      state.isContentVisible = true;
      state.isLoading = false;
    },
    hideContent(state) {
      state.isContentVisible = false;
    },
  },
  initialState,
});

export const cutscenesReducer = cutscenesSlice.reducer;
export const {
  addCutsceneToQueue,
  openCutsceneAction,
  hideContent,
  hideCutscene,
  showContent,
  hideUI,
  showUIAction,
  videoIsLoading,
  showCutscene,
  startPlaying,
  stopPlaying,
  videoIsLoaded,
} = cutscenesSlice.actions;
