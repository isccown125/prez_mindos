import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAbsolutePath } from "../../utils/functions";

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
}

const initialState: State = {
  currentCutscene: null,
  cutscenesQueue: [],
  isContentVisible: false,
  isCutsceneVisible: false,
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
    showCutscene(state) {
      state.isCutsceneVisible = true;
      state.isPlaying = true;
    },
    hideCutscene(state) {
      state.isCutsceneVisible = false;
      state.isPlaying = false;
    },
    openCutscene(
      state,
      action: PayloadAction<{
        path: string;
        name: string;
        content: () => React.ReactNode;
      }>
    ) {
      state.currentCutscene = {
        id: "sddsaads",
        path: getAbsolutePath().coreUrl + action.payload.path,
        name: action.payload.name,
        render: action.payload.content,
      };
      state.isCutsceneVisible = true;
      state.isContentVisible = true;
      state.isPlaying = true;
    },
    showContent(state) {
      state.isContentVisible = true;
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
  openCutscene,
  hideContent,
  hideCutscene,
  showContent,
  showCutscene,
  startPlaying,
  stopPlaying,
} = cutscenesSlice.actions;
