import Main from "./Main.tsx";
import Balls from "./Balls.tsx";

import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
const RootSection = () => {
  return (
    <Slide>
      <Main />
      <Balls />
    </Slide>
  );
};

export default RootSection;
