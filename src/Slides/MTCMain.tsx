import Mtc02Main from "./02/MTC02Main.tsx";
import Mtc03Main from "./03/MTC03Main.tsx";
import MTC04Main from "./04/MTC04Main.tsx";
import Mtc05Main from "./05/MTC05Main.tsx";
import Mtc06Main from "./06/MTC06Main.tsx";
import RootSection from "./01/RootSection.tsx";

const MtcMain = () => {
  return (
    <>
      <RootSection />
      <Mtc02Main />
      <Mtc03Main />
      <MTC04Main />
      <Mtc05Main />
      <Mtc06Main />
    </>
  );
};

export default MtcMain;
