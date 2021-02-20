import "../stylesheets/App.scss";

import adalabLogo from "../images/logo-adalab.png";
import HeaderCard from "./HeaderCard";
import Fill from "./Fill";
import Design from "./Design";
import GeneratorCard from "./GeneratorCard";

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <GeneratorCard />
        <form className="form js-submit" action="create card" method="GET">
          {/* <!-- fill section--> */}
          <Design />
          <fieldset className="fill js-container collapsable__close collapsable__open">
            <Fill />
          </fieldset>
          {/* <!--Secction share-->*/}
          <fieldset className="share js-container collapsable__close">
            <legend className="share__title js-title">
              <div className="share__title--container">
                <i className="icon fas fa-share-alt" />
                <h2 className="word">Comparte</h2>
              </div>
              <i className="collapsable__icon fas fa-chevron-up arrow" />
            </legend>

            <div className="border"></div>

            <div className="share__box collapsable__content collapsable__open">
              <button
                className="share__box--button js-create-btn"
                type="submit"
                title="Create card"
              >
                <i className="iconCard far fa-address-card" />
                Crear tarjeta
              </button>
              <p className="js-required" />
              <div className="share__box--subsection js-hidden js-display">
                <h3 className="titleCard">La tarjeta ha sido creada:</h3>
                <a className="linkCard js-card-result" href="" target="_blank">
                  link awesome profile card
                </a>
                <a className="twitterLink" href="" target="_blank">
                  <i className="icon fab fa-twitter" />
                  Compartir en twitter
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="footer">
        <small className="footer__small"> Mad Women profile cards </small>
        <a
          className="footer__link"
          title="Ir a la página de Adalab"
          type="_blank"
          href="https://adalab.es/"
        >
          <img className="footer__logo" src={adalabLogo} alt="logo Adalab" />
        </a>
      </footer>
    </div>
  );
}

export default App;
