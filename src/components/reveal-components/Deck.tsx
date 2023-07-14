import React, { useEffect } from "react";
// @ts-ignore
import Reveal from "reveal.js";
import { revealConfig } from "../../configs/reveal-config.ts";
import Footer from "../footer/Footer.tsx";
import Header from "../header/Header.tsx";

interface Props {
  children: React.ReactNode;
}

const Deck = ({ children }: Props) => {
  useEffect(() => {
    Reveal.initialize({ ...revealConfig });
  });

  return (
    <div className="slides relative" style={{ transition: "transform 0" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Deck;
