import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { Typography } from "@mui/material";

const MTC10Main = () => {
  useSynchronizeWithReveal();

  return (
    <Slide
      backgroundImage={[
        "/assets/slides/1000/polanka.png",
        "/assets/slides/1000/bg-green.png",
      ]}
      backgroundSize="180%"
      backgroundPosition="40% 100%"
    >
      <div className="absolute bottom-[-45px] right-[-30px]">
        <img className="h-[750px]" src="/assets/slides/1000/lezak.png" />
      </div>
      <div className=" bottom-[-50px] left-[460px] absolute">
        <img
          className="w-[250px]"
          src="/assets/slides/1000/zastanawia_sie.png"
          alt=""
        />
      </div>

      <div className="bg-yellow w-[330px] h-[90%] translate-y-center absolute left-[-150px] text-purple text-left p-5">
        <Typography
          variant="h4"
          style={{ textTransform: "none", fontSize: "0.9em" }}
          className="text-start"
        >
          <span className="text-purple font-extrabold">Strefa relaksu </span>
        </Typography>
        <Typography className="text-purple text-start" fontWeight="700">
          Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się że
          uczenie się było do tej pory błędnie robione,
        </Typography>
      </div>
    </Slide>
  );
};

export default MTC10Main;
