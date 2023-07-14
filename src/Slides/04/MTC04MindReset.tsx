import Section from "../../components/reveal-components/Section.tsx";
import SectionContent from "../../components/reveal-components/SectionContent.tsx";
import { Box, Typography } from "@mui/material";

const Mtc04MindReset = () => {
  return (
    <Section slideBackgroundImgUrl="/assets/slides/0300/img/bgblue.png">
      <SectionContent>
        <div className="absolute top-0 left-0">
          <img src="/assets/slides/0000/img/icon_volume.svg" />
        </div>
        <div className="absolute top-0 left-0">
          <img src="/assets/slides/0000/img/icon_list.svg" />
        </div>
        <div className="absolute top-0 left-0">
          <img src="/assets/slides/0000/img/icon_play.svg" />
        </div>
        <Box className="absolute right-[0] bottom-[200px] w-[320px] text-left">
          <Typography
            style={{ textTransform: "none" }}
            variant="h4"
            fontWeight="bold"
          >
            Strefa relaksu
          </Typography>
          <Typography>
            Opis - czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj
            się, że uczenie się było do tej pory błędnie robione.
          </Typography>
        </Box>
        <div
          className="absolute right-[220px] bottom-[-160px]"
          style={{ transform: "translateX(-50%)" }}
        >
          <img
            className="w-[500px]"
            src="/assets/slides/0300/img/fotel-fronview-sluchawki.png"
          />
        </div>
        <div className="absolute bottom-[-80px] right-[200px]">
          <img
            className="w-[450px]"
            src="/assets/slides/0000/img/Pozycja_1.png"
          />
        </div>
      </SectionContent>
    </Section>
  );
};

export default Mtc04MindReset;
