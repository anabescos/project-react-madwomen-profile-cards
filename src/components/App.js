import "../stylesheets/App.scss";

import adalabLogo from "../images/logo-adalab.png";
import HeaderCard from "./HeaderCard";
import Fill from "./Fill";
import Design from "./Design";

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <section className="generator">
          <article className="generator__article">
            <div className="generator__article--button1 js-reset">
              <i className="far fa-trash-alt" />
              Reset
            </div>
            <div className="generator__article--container js-card">
              <div className="container__nameprofession">
                <h2 className="container__nameprofession--name js-card-name">
                  Nombre apellido
                </h2>
                <h3 className="container__nameprofession--profession js-card-job">
                  Profesión
                </h3>
              </div>
              <div className="js__profile-image container__img" />
              <nav className="container__nav">
                <ul className="menu">
                  <li className="menu__item">
                    <a className="js-card-phone" href="">
                      <i className="menu__item--icon fas fa-mobile-alt" />
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="js-card-email" href="">
                      <i className="menu__item--icon far fa-envelope" />
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="js-card-linkedin" href="" target="_blank">
                      <i className="menu__item--icon fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="js-card-github" href="" target="_blank">
                      <i className="menu__item--icon fab fa-github-alt" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </section>
        <form className="form js-submit" action="create card" method="GET">
          <Design />
          <Fill />
          {/* <!--Section share-->*/}
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
