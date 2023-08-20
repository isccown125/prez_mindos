import classnames from "classnames";
import { RefObject } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLButtonElement>;
  onClick?: () => void;
}

const OutlineButton = ({ children, className, onClick, ref }: Props) => {
  const classes = classnames(
    "border-2 border-chartLabel text-chartFill rounded-xl p-2 hover:opacity-80 " +
      `${className ? " " + className : ""}`
  );

  return (
    <button ref={ref} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default OutlineButton;
