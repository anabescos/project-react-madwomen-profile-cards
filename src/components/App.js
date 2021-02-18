
import '../stylesheets/App.scss';

import adalabLogo from '../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import GeneratorCard from './GeneratorCard';
function App() {
  return (
    <div className="App">
     
     <HeaderCard />
     

    <main className="wrapper">
      <GeneratorCard />
      <form className="form js-submit" action="create card" method="GET">
        {/* <!--design section--> */}
        <fieldset className="design js-container collapsable__close">
          <legend className="design__title js-title">
            <div className="design__title--container">
              <i className="far fa-object-ungroup icon"></i>
              <h2 className="word">Diseña</h2>
            </div>
            <i className="collapsable__icon fas fa-chevron-up arrow"></i>
          </legend>


          <div className="design__palette collapsable__content">
            <h3 className="design__palette--colors">Colores</h3>
            <div>
              <label className="design__palette--input" for="">
                <input
                  className="design__palette1 js-palette"
                  type="radio"
                  name="palette"
                  value="1"
                  checked
                />
                <ul className="design__palette--list design__palette1">
                  <li className="design__palette1--color1">colorA</li>
                  <li className="design__palette1--color2">colorB</li>
                  <li className="design__palette1--color3">colorC</li>
                </ul>
              </label>
              <label className="design__palette--input" for="">
                <input className="js-palette" type="radio" name="palette" value="2" />
                <ul className="design__palette--list">
                  <li className="design__palette2--color1">colorA</li>
                  <li className="design__palette2--color2">colorB</li>
                  <li className="design__palette2--color3">colorC</li>
                </ul>
              </label>
              <label className="design__palette--input" for="">
                <input className="js-palette" type="radio" name="palette" value="3" />
                <ul className="design__palette--list">
                  <li className="design__palette3--color1">colorA</li>
                  <li className="design__palette3--color2">colorB</li>
                  <li className="design__palette3--color3">colorC</li>
                </ul>
              </label>
              <label className="design__palette--input" for="">
                <input className="js-palette" type="radio" name="palette" value="4" />
                <ul className="design__palette--list">
                  <li className="design__palette4--color1">colorA</li>
                  <li className="design__palette4--color2">colorB</li>
                  <li className="design__palette4--color3">colorC</li>
                </ul>
              </label>
            </div>
          </div>
        </fieldset>

        {/* <!-- fill section--> */}
        <fieldset className="fill js-container collapsable__close collapsable__open">
          <legend className="fill__title js-title">
            <div className="fill__title--container">
              <i className="far fa-keyboard icon"></i>
              <h2 className="word">Rellena</h2>
            </div>
            <i className="collapsable__icon fas fa-chevron-up arrow"></i>
          </legend>


          <div className="fill__box collapsable__content">
            <label className="fill__box--label name" for="Name">Nombre Completo</label>
            <input
              className="fill__box--input js-input-name js-input-text"
              placeholder="Ej: Sally Jill"
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="fill__box--label" for="job">Puesto</label>
            <input
              className="fill__box--input job js-input-job js-input-text"
              placeholder="Ej: Front-end unicorn"
              type="text"
              id="job"
              name="job"
              required
            />
            <label className="fill__box--label imgLabel" for="photo">
              Imagen de perfil</label
            >
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
              <div className="js__profile-preview preview"></div>
            </div>
            <label className="fill__box--label" for="email">Email</label>
            <input
              className="fill__box--input js-input-email js-input-text"
              placeholder="Ej: sally-hill@gmail.com"
              type="email"
              id="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <label className="fill__box--label" for="phone">Teléfono</label>
            <input
              className="fill__box--input js-input-phone js-input-text"
              placeholder="Ej:+34 666666666"
              type="tel"
              id="phone"
              name="phone"
              pattern="^[0-9]{9}$"
              required
            />
            <label className="fill__box--label" for="linkedin">Linkedin</label>
            <input
              className="fill__box--input js-input-linkedin js-input-text"
              placeholder="Ej: linkedin.com/in/sally.hill"
              type="text"
              id="linkedin"
              name="linkedin"
            />
            <label className="fill__box--label" for="github">Github</label>
            <input
              className="fill__box--input js-input-github js-input-text"
              placeholder="Ej: @sally-hill"
              type="text"
              id="github"
              name="github"
            />
          </div>
        </fieldset>

        {/* <!--Secction share--> */}
        <fieldset className="share js-container collapsable__close">
          <legend className="share__title js-title">
            <div className="share__title--container">
              <i className="icon fas fa-share-alt"></i>
              <h2 className="word">Comparte</h2>
            </div>
            <i className="collapsable__icon fas fa-chevron-up arrow"></i>
          </legend>


          <div className="border"></div> 

          <div className="share__box collapsable__content collapsable__open">
            <button
              className="share__box--button js-create-btn"
              type="submit"
              title="Create card"
            >
              <i className="iconCard far fa-address-card"></i>
              Crear tarjeta
            </button>
            <p className="js-required"></p>
            <div className="share__box--subsection js-hidden js-display">
              <h3 className="titleCard">La tarjeta ha sido creada:</h3>
              <a className="linkCard js-card-result" href="" target="_blank"
                >link awesome profile card</a
              >
              <a className="twitterLink" href="" target="_blank"
                ><i className="icon fab fa-twitter"></i>Compartir en twitter</a
              >
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
        <img
          className="footer__logo"
          src={adalabLogo}
          alt="logo Adalab"
        />
      </a>
    </footer>
    </div>
  );
}

export default App;
