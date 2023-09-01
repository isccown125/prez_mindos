import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const PulseIcon = () => {
  const circle = useRef<HTMLDivElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const g = gsap.context(() => {
      const tl1 = gsap.timeline({
        delay: 0.4,
        repeat: 999999,
        repeatDelay: 0.3,
      });
      const tl2 = gsap.timeline({
        repeat: 999999,
        repeatDelay: 0.4,
      });
      const tl3 = gsap.timeline({
        repeat: 999999,
        repeatDelay: 0.4,
      });

      tl1.fromTo(
        circle2.current,
        { opacity: 0, outlineOffset: 0 },
        { outlineOffset: 8, opacity: 0.3, duration: 0.6 }
      );

      tl2.fromTo(
        circle1.current,
        { opacity: 0, outlineOffset: 0 },
        { outlineOffset: 15, opacity: 0.3, duration: 0.6 }
      );
    });

    return () => g.revert();
  });
  return (
    <div className="absolute">
      <div
        className="bg-[#ffffff] w-[25px] relative aspect-[1] rounded-full"
        ref={circle}
      >
        <div
          className="bg-[#ffffff] w-full h-full absolute  rounded-full outline outline-1 outline-[#ffffff] outline-offset-8"
          ref={circle1}
        ></div>
        <div
          className="bg-[#ffffff] w-full h-full flex absolute  rounded-full outline outline-1"
          ref={circle2}
        ></div>
      </div>
    </div>
  );
};

export default PulseIcon;
