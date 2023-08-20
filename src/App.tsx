import Deck from "./components/reveal-components/Deck.tsx";
import RootSection from "./Slides/01/RootSection.tsx";
import MTC03Main from "./Slides/03/MTC033Main.tsx";
import MTC02Main from "./Slides/02/MTC02Main.tsx";
import MTC04Main from "./Slides/04/MTC04Main.tsx";
import Mtc05Main from "./Slides/05/MTC05Main.tsx";
import MTC06Main from "./Slides/06/MTC06Main.tsx";
import Mtc07Main from "./Slides/07/MTC07Main.tsx";
import MTC08Main from "./Slides/08/MTC08Main.tsx";
import MTC09Main from "./Slides/09/MTC09Main.tsx";
import MTC10Main from "./Slides/10/MTC10Main.tsx";
import MTC04Mindos from "./Slides/11/MTC11Main.tsx";
import MTC12Mindos from "./Slides/12/MTC12Main.tsx";
import MTC13Main from "./Slides/13/MTC13Main.tsx";
import MTC14Main from "./Slides/14/MTC14Main.tsx";
import MTC15Main from "./Slides/15/MTC15Main.tsx";
import MTC16Main from "./Slides/16/MTC16Main.tsx";
import MTC17Main from "./Slides/17/MTC17Main.tsx";
import MTC18Main from "./Slides/18/MTC18Main.tsx";
import MTC19Main from "./Slides/19/MTC19Main.tsx";

function App() {
  return (
    <Deck>
      <RootSection />
      <MTC02Main />
      <MTC03Main />
      <MTC04Main />
      <Mtc05Main />
      <MTC06Main />
      <Mtc07Main />
      <MTC08Main />
      <MTC09Main />
      <MTC10Main />
      <MTC04Mindos />
      <MTC12Mindos />
      <MTC13Main />
      <MTC14Main />
      <MTC15Main />
      <MTC16Main />
      <MTC17Main />
      <MTC18Main />
      <MTC19Main />
    </Deck>
  );
}

export default App;
