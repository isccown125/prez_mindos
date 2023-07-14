import Section from "../../components/reveal-components/Section.tsx";
import MTC03Alfabetgame from "./Mtc03AlphabetGame.tsx";
import MTC03MainPileczki from "./Mtc03MainBalls.tsx";

const Mtc03Main = () => {
  return (
    <Section>
      <MTC03Alfabetgame />
      <MTC03MainPileczki />
    </Section>
  );
};

export default Mtc03Main;
