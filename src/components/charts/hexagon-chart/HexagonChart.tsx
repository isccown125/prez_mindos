import { Typography, Box } from "@mui/material";
import { RefObject } from "react";

interface Props {
  fill?: number;
  fillRef?: RefObject<HTMLDivElement>;
  fillTrackRef?: RefObject<HTMLDivElement>;
  labelRef?: RefObject<HTMLSpanElement>;
  label?: string;
}

const HexagonChart = ({
  fill,
  fillRef,
  label,
  labelRef,
  fillTrackRef,
}: Props) => {
  return (
    <Box className="flex flex-col items-start gap-2 w-[350px]">
      <Typography
        ref={labelRef}
        variant="caption"
        fontSize={"15px"}
        className="text-chartLabel"
        fontWeight="bold"
      >
        {label}
      </Typography>
      <div ref={fillTrackRef} className="chart w-full h-[5px] bg-[#ffffff]">
        <div
          ref={fillRef}
          style={{ width: fill + "%" }}
          className="chart_fill bg-chartFill h-full"
        ></div>
      </div>
    </Box>
  );
};

export default HexagonChart;
