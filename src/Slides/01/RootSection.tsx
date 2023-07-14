import Main from "./Main.tsx";
import Balls from "./Balls.tsx";
import VerticalSlides from "../../components/reveal-components/VerticalSlides.tsx";

const RootSection = () => {
  return (
    <VerticalSlides>
      <Main />
      <Balls />
    </VerticalSlides>
  );
};

export default RootSection;
