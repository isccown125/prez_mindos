import { Box } from "@mui/material";
import React, { RefObject } from "react";

const YellowBg = ({
  children,
  ref,
}: {
  ref?: RefObject<HTMLDivElement>;
  children?: React.ReactNode;
}) => {
  return (
    <Box ref={ref} className="bg-yellow h-full w-[620px] px-6">
      {children}
    </Box>
  );
};

export default YellowBg;
