import classnames from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const OutlineButton = ({ children, className, onClick }: Props) => {
  const classes = classnames(
    "border-2 border-chartLabel text-chartFill rounded-xl p-2 hover:opacity-80 " +
      `${className ? " " + className : ""}`
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default OutlineButton;
