import Deck from "./components/reveal-components/Deck.tsx";
import RootSection from "./Slides/01/RootSection.tsx";
import Mtc02Main from "./Slides/02/MTC02Main.tsx";
import Mtc03Main from "./Slides/03/MTC03Main.tsx";
import MTC04Main from "./Slides/04/MTC04Main.tsx";
import Mtc05Main from "./Slides/05/MTC05Main.tsx";
import MTC06Main from "./Slides/06/MTC06Main.tsx";
import Mtc07Main from "./Slides/07/MTC07Main.tsx";
import MTC08Main from "./Slides/08/MTC08Main.tsx";
import MTC09Main from "./Slides/09/MTC09Main.tsx";
import MTC10Main from "./Slides/10/MTC10Main.tsx";

function App() {
  return (
    <Deck>
      <RootSection />
      <Mtc02Main />
      <Mtc03Main />
      <MTC04Main />
      <Mtc05Main />
      <MTC06Main />
      <Mtc07Main />
      <MTC08Main />
      <MTC09Main />
      <MTC10Main />
    </Deck>
  );
}

export default App;
