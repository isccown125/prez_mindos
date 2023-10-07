import { useAppDispatch } from "../store";
import { openCutsceneAction } from "../store/slices/cutscenes-slice";

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
  const dispatch = useAppDispatch();

  const openCutscene = (options: {
    path: string;
    name: string;
    content: () => React.ReactNode;
  }) => {
    dispatch(openCutsceneAction(options));
  };

  return { openCutscene };
};

export default useCutscenes;
