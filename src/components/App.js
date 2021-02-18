import '../stylesheets/App.scss';

import adalabLogo from '../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import Fill from './Fill';
import Design from './Design';

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
          {/* <!-- fill section--> */}
          <Design />
          <fieldset className="fill js-container collapsable__close collapsable__open">
            {/* <legend className="fill__title js-title">
            <div className="fill__title--container">
              <i className="far fa-keyboard icon"></i>
              <h2 className="word">Rellena</h2>
            </div>
            <i className="collapsable__icon fas fa-chevron-up arrow"></i>
          </legend> */}

            <Fill />

            <div className="fill__box collapsable__content">
              <label className="fill__box--label name" for="Name">
                Nombre Completo
              </label>
              <input
                className="fill__box--input js-input-name js-input-text"
                placeholder="Ej: Sally Jill"
                type="text"
                id="name"
                name="name"
                required
              />
              <label className="fill__box--label" for="job">
                Puesto
              </label>
              <input
                className="fill__box--input job js-input-job js-input-text"
                placeholder="Ej: Front-end unicorn"
                type="text"
                id="job"
                name="job"
                required
              />
              <label className="fill__box--label imgLabel" for="photo">
                Imagen de perfil
              </label>
              <div className="addImage">
                <button
                  className="js__profile-trigger fill__box--input buttonImg"
                  type="button"
                >
                  Añadir imagen
                </button>
                <input
                  className="js__profile-upload-btn buttonInput"
                  type="file"
                  id="photo"
                  name="photo"
                  required
                />
                <div className="js__profile-preview preview" />
              </div>
              <label className="fill__box--label" for="email">
                Email
              </label>
              <input
                className="fill__box--input js-input-email js-input-text"
                placeholder="Ej: sally-hill@gmail.com"
                type="email"
                id="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <label className="fill__box--label" for="phone">
                Teléfono
              </label>
              <input
                className="fill__box--input js-input-phone js-input-text"
                placeholder="Ej:+34 666666666"
                type="tel"
                id="phone"
                name="phone"
                pattern="^[0-9]{9}$"
                required
              />
              <label className="fill__box--label" for="linkedin">
                Linkedin
              </label>
              <input
                className="fill__box--input js-input-linkedin js-input-text"
                placeholder="Ej: linkedin.com/in/sally.hill"
                type="text"
                id="linkedin"
                name="linkedin"
              />
              <label className="fill__box--label" for="github">
                Github
              </label>
              <input
                className="fill__box--input js-input-github js-input-text"
                placeholder="Ej: @sally-hill"
                type="text"
                id="github"
                name="github"
              />
            </div>
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

            <div className="border" />

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
