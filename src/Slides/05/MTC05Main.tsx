import Section from "../../components/reveal-components/Section.tsx";

const Mtc05Main = () => {
  return (
    <Section
      data-state="slide-0400"
      data-background-image="/assets/slides/0400/img/redbg4.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-sm-4">
                <div id="elon_0400" className="left-0400">
                  <img src="/assets/slides/0000/img/Pozycja_1.png" />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="center-xxxx">
                  <div
                    id="stolik_0400"
                    className="col-sm-8 fotel-0400 center-inside-xxxx"
                  >
                    <img src="/assets/slides/0400/img/stolik_z_pucharem.png" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 right-0400">
                <div className="center-xxxx">
                  <div id="icon_vol_0400" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_volume.svg" />
                  </div>

                  <div id="icon_list_0400" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_list.svg" />
                  </div>

                  <div id="icon_play_0400" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_play.svg" />
                  </div>
                </div>

                <h2 id="nagrody_header_0400">Nagrody</h2>
                <div id="nagrody_text_0400">
                  Opis - czym się zajmuje Fitness Mózgu? Kliknij w play i
                  przekonaj się, że uczenie się było do tej pory błędnie
                  robione.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mtc05Main;
