import MTC02Alfabetgame from "./MTC02AlphabetGame.tsx";
import MTC02MainPileczki from "./MTC02MainBalls.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";

const MTC02Main = () => {
  return (
    <Slide>
      <MTC02Alfabetgame />
      <MTC02MainPileczki />
    </Slide>
  );
};

export default MTC02Main;
