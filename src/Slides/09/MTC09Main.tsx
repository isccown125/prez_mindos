import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";
import { Box, Typography } from "@mui/material";

const MTC09Main = () => {
  useSynchronizeWithReveal();


  
  return (
    <Slide
      backgroundImage={[
        "/assets/slides/0900/polanka.png",
        "/assets/slides/0900/bg-green.png",
      ]}
      backgroundSize="180%"
      backgroundPosition="40% 100%"
    >
      <div className="absolute bottom-[-45px] right-[-30px]">
        <img className="h-[750px]" src="/assets/slides/0900/lezak.png" />
      </div>
      <div className=" bottom-[-50px] left-[460px] absolute">
        <img
          className="w-[250px]"
          src="/assets/slides/0900/Edwart.png"
          alt=""
        />
      </div>

      <Box className="absolute left-[-90px] bottom-[90px] w-[360px] text-left">
        <Typography variant="h4">Poznaj Edwarta</Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          vero odit deleniti, molestias explicabo eos dolorem, dignissimos
          tempora laudantium sapiente est ducimus praesentium sequi ipsum,
          tenetur quod reiciendis cumque commodi?
        </Typography>
      </Box>
    </Slide>
  );
};

export default MTC09Main;
