import { Typography } from "@mui/material";
import { gsap } from "gsap";
import {useLayoutEffect, useRef} from 'react'
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal.tsx";
import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";


const Mtc04MainBalls = () => {
useSynchronizeWithReveal()

const elon= useRef<HTMLDivElement>(null);
const yellowBg= useRef<HTMLDivElement>(null);
const yellowBgHeader = useRef<HTMLDivElement>(null);
const yellowBGBody = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

 const tl = gsap.timeline({ delay: 0.5 });
  tl.from(elon.current, { duration:1.4, y: -200, opacity: 0 });

 
      const tl2 = gsap.timeline({ delay: 0.2 });
      tl2.from(yellowBg.current, { duration: 0.8, x: 1000 });

      const tl3 = gsap.timeline({ delay: 0.6 });
      tl3.from(yellowBgHeader.current, { duration: 0.7, x: 200 });

      const tl4 = gsap.timeline({ delay: 0.8 });
      tl4.from(yellowBGBody.current, { duration: 0.8, x: 150 });


  })
      return () => ctx.revert();
});

  return (
    <Slide
      backgroundImage="/assets/slides/0301/img/strefa-relaksu-without-transparent.png"
    >
      <div ref={elon} className="absolute left-0-[70px] bottom-[-50px]">
        <img
          className="w-[350px]"
          src="/assets/slides/0000/img/Pozycja_1.png"
        />
      </div>
      <div ref={yellowBg} className="bg-yellow w-[330px] h-full absolute right-0 text-purple text-left p-5">
        <Typography
              variant="h4"
              style={{ textTransform: "none", fontSize: "0.9em" }}
              ref={yellowBgHeader}
              className="text-start"
            >
          <span className="text-purple font-extrabold">Strefa relaksu </span>
        </Typography>
        <Typography
                className="text-purple text-start"
                fontWeight="700"
                ref={yellowBGBody }
              >
          Czym się zajmuje Fitness Mózgu? Kliknij w play i przekonaj się że
          uczenie się było do tej pory błędnie robione,
        </Typography>
      </div>
    </Slide>
  );
};

export default Mtc04MainBalls;
