import Section from "../../components/reveal-components/Section.tsx";

const Mtc06Main = () => {
  return (
    <Section
      data-state="slide-0500"
      data-background-image="/assets/slides/0500/img/biurko-sideview.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row things-0500">
              <div className="col-sm-2">
                <div id="produktywnosc_0500">Produktywność</div>
                <div id="muzyka_0500">Muzyka</div>
              </div>

              <div className="col-sm-1 offset-sm-2">
                <div className="center-xxxx">
                  <div id="icon_vol_0500" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_volume.svg" />
                  </div>

                  <div id="icon_list_0500" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_list.svg" />
                  </div>

                  <div id="icon_play_0500" className="center-inside-xxxx">
                    <img src="/assets/slides/0000/img/icon_play.svg" />
                  </div>
                </div>

                <div id="notatki_0500">Notatki</div>
              </div>

              <div id="kofeina_0500" className="col-sm-2">
                Kofeina
              </div>

              <div id="woda_0500" className="col-sm-1 offset-sm-2">
                Woda
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mtc06Main;
