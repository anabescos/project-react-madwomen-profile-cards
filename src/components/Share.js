import React from "react";
import "../stylesheets/layout/form/_share.scss";

function Share(props) {
  const handleShare = () => {
    props.handleShare();
  };

  console.log(props);
  
  return (
      <div className="share__box collapsable__content collapsable__open">
        <button
          className="share__box--button js-create-btn"
          type="submit"
          title="Create card"
          onClick={handleShare}
        >
          <i className="iconCard far fa-address-card"></i>
          Crear tarjeta
        </button>
        <p className="js-required"></p>
        <div className="share__box--subsection  js-display">
          <h3 className="titleCard">La tarjeta ha sido creada:</h3>
          <a
            className="linkCard js-card-result"
            href={`${props.serverData}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Qué talento!!
            {props.serverData}
          </a>
          <a className="twitterLink" href="www.twitter.com" target="_blank" rel="noreferrer">
            <i className="icon fab fa-twitter"></i>Compartir en twitter
          </a>
        </div>
      </div>
    );
}

export default Share;
