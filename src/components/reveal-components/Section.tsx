import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  slideBackgroundImgUrl?: string;
  slideTransition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
  [index: string]: string | React.ReactNode;
}

const Section = ({
  children,
  className,
  slideBackgroundImgUrl,
  slideTransition,
  ...props
}: Props) => {
  return (
    <section
      data-background-image={slideBackgroundImgUrl}
      data-transition={slideTransition ?? "none"}
      className={className + " h-[80%] top-[50%]"}
      style={{ transform: "translatey(-50%)" }}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
