import Section from "../../components/reveal-components/Section.tsx";
import { Typography } from "@mui/material";

const Mtc04MainBalls = () => {
  return (
    <Section
      data-background-position="30% 45%"
      slideBackgroundImgUrl="/assets/slides/0301/img/strefa-relaksu-without-transparent.png"
    >
      <div className="absolute left-0-[70px] bottom-[-50px]">
        <img
          className="w-[350px]"
          src="/assets/slides/0000/img/Pozycja_1.png"
        />
      </div>
      <div className="bg-yellow w-[300px] h-full absolute right-0 text-purple text-left p-5">
        <Typography
          style={{ textTransform: "none", color: "#6A2578" }}
          className="text-purple mt-12"
          variant="h4"
        >
          Strefa relaksu
        </Typography>
        <Typography>
          Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się że
          uczenie się było do tej pory błędnie robione,
        </Typography>
      </div>
    </Section>
  );
};

export default Mtc04MainBalls;
