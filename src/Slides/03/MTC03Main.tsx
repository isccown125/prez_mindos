import MTC03Alfabetgame from "./Mtc03AlphabetGame.tsx";
import MTC03MainPileczki from "./Mtc03MainBalls.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";

const Mtc03Main = () => {
  return (
    <Slide>
      <MTC03Alfabetgame />
      <MTC03MainPileczki />
    </Slide>
  );
};

export default Mtc03Main;
