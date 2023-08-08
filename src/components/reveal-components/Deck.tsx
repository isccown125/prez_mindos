import React, { useEffect } from "react";
import Reveal from "reveal.js";
import { revealConfig } from "../../configs/reveal-config.ts";
import Footer from "../footer/Footer.tsx";
import Header from "../header/Header.tsx";
import RevealJS from "@cenk1cenk2-presentations/react-reveal-base/dist/components/RevealJS";

interface Props {
  children: React.ReactNode;
}

const Deck = ({ children }: Props) => {
  useEffect(() => {
    Reveal.initialize({ ...revealConfig });
  });

  return (
    <RevealJS>
      <Header />
      {children}
      <Footer />
    </RevealJS>
  );
};

export default Deck;
