import React from "react";
import { Container } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const SectionContent = ({ children }: Props) => {
  return (
    <Container
      className="h-full w-full relative"
      style={{
        padding: "0",
      }}
    >
      {children}
    </Container>
  );
};

export default SectionContent;
