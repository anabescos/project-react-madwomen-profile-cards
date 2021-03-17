import React from "react";
import "../stylesheets/layout/form/_share.scss";

function Share(props) {
  const handleShare = () => {
    props.handleShare();
  };
  console.log(props.serverData);

  const renderCreatedCard = () => {
    if (props.serverData.success === true) {
      return (
        <>
          <div className="share__box--subsection  js-display">
            <h3 className="titleCard">La tarjeta ha sido creada:</h3>
            <a
              className="linkCard js-card-result"
              href={`${props.serverData.cardURL}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {props.serverData.cardURL}
            </a>
            <a
              className="twitterLink"
              href={`https://twitter.com/intent/tweet?text=¡Echa un vistazo a la tarjeta que me he creado con Mad Women Profile Cards!&url=${props.serverData.cardURL}&hashtags=Adalab,promoL,MadWomen,frontend`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fab fa-twitter"></i>Compartir en twitter
            </a>
          </div>
        </>
      );
    }
  };
  return (
    <div className="share__box collapsable__content collapsable__open">
      <button
        className="share__box--button js-create-btn"
        type="button"
        title="Create card"
        onClick={handleShare}
      >
        <i className="iconCard far fa-address-card"></i>
        Crear tarjeta
      </button>
      <div className={`js-required ${props.hiddenClass}`}>
        {renderCreatedCard()}
      </div>
    </div>
  );
}

export default Share;
