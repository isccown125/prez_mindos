import { LegacyRef } from "react";

interface Props {
  x?: number;
  y?: number;
  z?: number;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
}

const IconWrapper = ({
  x,
  y,
  z,
  children,
  innerRef,
  className,
  height,
  width,
}: Props) => {

return (
  <div
    className={className + " absolute"}
    ref={innerRef}
    style={{
      width: width,
      height: height,
      top: y + "px",
      left: x + "px",
      zIndex: z,
    }}
  >
    {children}
  </div>
);
};

export default IconWrapper;
