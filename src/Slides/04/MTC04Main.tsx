import Section from "../../components/reveal-components/Section.tsx";
import Mtc04MindReset from "./MTC04MindReset.tsx";
import MTC04MainPileczki from "./Mtc04MainBalls.tsx";

const Mtc04Main = () => {
  return (
    <Section>
      <Mtc04MindReset />
      <MTC04MainPileczki />
    </Section>
  );
};

export default Mtc04Main;
