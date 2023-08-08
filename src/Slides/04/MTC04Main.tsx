import Mtc04MindReset from "./MTC04MindReset.tsx";
import MTC04MainPileczki from "./Mtc04MainBalls.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";

const Mtc04Main = () => {
  return (
    <Slide>
      <Mtc04MindReset />
      <MTC04MainPileczki />
    </Slide>
  );
};

export default Mtc04Main;
