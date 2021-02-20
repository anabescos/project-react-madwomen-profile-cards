import "../stylesheets/App.scss";

import adalabLogo from "../images/logo-adalab.png";
import HeaderCard from "./HeaderCard";
import GeneratorCard from "./GeneratorCard";
import Share from "./Share";
import Fill from "./Fill";
import Design from "./Design";

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <GeneratorCard />
        <form className="form js-submit" action="create card" method="GET">
          <Design />
          <Fill />
          <Share />
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
