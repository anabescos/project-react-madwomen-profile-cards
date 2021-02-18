import React from 'react';

import "../stylesheets/layout/form/_share.scss";

class Share extends React.Component {
  render() {
    return (
        <fieldset className="share js-container collapsable__close">
          <legend className="share__title js-title">
            <div className="share__title--container">
              <i className="icon fas fa-share-alt"></i>
              <h2 className="word">Comparte</h2>
            </div>
            <i className="collapsable__icon fas fa-chevron-up arrow"></i>
          </legend>


          {/* <div className="border"></div>  */}

          <div className="share__box collapsable__content collapsable__open">
            <button
              className="share__box--button js-create-btn"
              type="submit"
              title="Create card">
              <i className="iconCard far fa-address-card"></i>
              Crear tarjeta
            </button>
            <p className="js-required"></p>
            <div className="share__box--subsection js-hidden js-display">
              <h3 className="titleCard">La tarjeta ha sido creada:</h3>
              <a className="linkCard js-card-result" href="" target="_blank">link awesome profile card</a>
              <a className="twitterLink" href="" target="_blank"><i className="icon fab fa-twitter"></i>Compartir en twitter</a>
            </div>
          </div>
        </fieldset>
    );
  }
}

export default Share;


