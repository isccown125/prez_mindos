import { Slide } from "@cenk1cenk2-presentations/react-reveal-base";
import { getAbsolutePath } from "../../utils/functions";
import IconWrapper from "../../components/IconWrapper";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import useSynchronizeWithReveal from "../../hooks/useSynchronizeWithReveal";

const MTC18Main = () => {
  useSynchronizeWithReveal();

  const text = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const textBox1 = useRef<HTMLDivElement>(null);
  const textBox2 = useRef<HTMLDivElement>(null);
  const textBox3 = useRef<HTMLDivElement>(null);
  const textBox4 = useRef<HTMLDivElement>(null);
  const iconVolume = useRef<HTMLDivElement>(null);
  const iconList = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const edwart = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({ delay: 0.4 });
      const tl2 = gsap.timeline({ delay: 1 });
      const tl3 = gsap.timeline({ delay: 1.4 });
      const tl4 = gsap.timeline({ delay: 1.8 });
      const tl5 = gsap.timeline({ delay: 2 });
      const tl6 = gsap.timeline({ delay: 2.4 });

      tl1.from(line.current, { duration: 0.6, scaleX: 0 });
      tl2.from(text.current, { y: -200, opacity: 0 });
      tl3
        .from(textBox1.current, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(2)",
        })
        .from(textBox2.current, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(2)",
        })
        .from(textBox3.current, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(2)",
        })
        .from(textBox4.current, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(2)",
        });

      tl4.from(edwart.current, { duration: 0.6, y: 300, opacity: 0 });
      tl5.from(button.current, { duration: 0.4, y: 300, opacity: 0 });
      tl6
        .from(iconList.current, {
          duration: 0.4,
          opacity: 0,
          scale: 0,
          ease: "back.out(3)",
        })
        .from(iconVolume.current, {
          duration: 0.4,
          scale: 0,
          opacity: 0,
          ease: "back.out(3)",
        });
    });
    return () => ctx.revert();
  });
  return (
    <Slide
      backgroundImage={
        getAbsolutePath().coreUrl + "/assets/slides/backgrounds/bg-darkblue.png"
      }
    >
      <div ref={line} className="absolute flex w-full top-[150px]">
        <img
          src={getAbsolutePath().coreUrl + "/assets/slides/1800/lines.png"}
        />
      </div>
      <div
        ref={textBox1}
        className="bg-yellow justify-center items-center gap-3 flex absolute py-1 px-5 rounded-xl top-[250px] left-[-100px]"
      >
        <div className="text-purple text-2xl font-bold">Pomiar</div>
        <img
          className="h-[50px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1800/Kamil.png"}
        />
      </div>
      <div
        ref={textBox2}
        className="bg-yellow justify-center items-center gap-3 flex absolute py-1 px-5 rounded-xl top-[250px] left-[150px]"
      >
        <div className="text-purple text-2xl text-left font-bold">
          Mind <br /> Training <br /> Center
        </div>
        <img
          className="h-[80px]"
          src={
            getAbsolutePath().coreUrl + "/assets/slides/1800/efekty_icon.png"
          }
        />
      </div>
      <div
        ref={textBox3}
        className="bg-yellow justify-center items-center gap-3 flex absolute py-1 px-5 rounded-xl top-[250px] right-[200px]"
      >
        <div className="text-purple text-2xl text-left font-bold">
          Odkryj <br /> wszystkie <br /> Spowalniacze
        </div>
        <img
          className="h-[80px]"
          src={
            getAbsolutePath().coreUrl + "/assets/slides/1800/search_icon.png"
          }
        />
      </div>
      <div
        ref={textBox4}
        className="bg-yellow justify-center items-center gap-3 flex absolute py-1 px-5 rounded-xl top-[250px] right-[-100px]"
      >
        <div className="text-purple text-2xl font-bold text-left">
          Odblokuj <br /> swoje <br /> Supermoce
        </div>
        <img
          className="h-[80px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1800/award_icon.png"}
        />
      </div>
      <div ref={text} className="absolute top-[100px] left-[250px]">
        <h4>Przyłącz się do nas!</h4>
      </div>

      <div ref={edwart} className="absolute bottom-[-50px] right-[150px]">
        <img
          className="h-[320px]"
          src={getAbsolutePath().coreUrl + "/assets/slides/1800/cooledwart.png"}
        />
      </div>
      <IconWrapper innerRef={iconList} x={300} y={450} width={50} height={50}>
        <img
          src={getAbsolutePath().coreUrl + "/assets/slides/icons/icon_list.svg"}
        />
      </IconWrapper>
      <IconWrapper innerRef={iconVolume} x={850} y={430} width={50} height={50}>
        <img
          src={
            getAbsolutePath().coreUrl + "/assets/slides/icons/icon_volume.svg"
          }
        />
      </IconWrapper>
      <div ref={button} className="absolute bottom-[60px] left-[350px] ">
        <button className="text-2xl w-full h-full flex py-2 px-4 rounded-xl overflow-hidden bg-chartFill">
          Zostań członkiem
        </button>
      </div>
    </Slide>
  );
};

export default MTC18Main;
