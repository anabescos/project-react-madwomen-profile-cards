import React from "react";
import "../stylesheets/layout/form/_share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(ev) {
    ev.preventDefault();
    this.props.handleShare();
  }

  render() {
    return (
      <div className="share__box collapsable__content collapsable__open">
        <button
          className="share__box--button js-create-btn"
          type="submit"
          title="Create card"
          onClick={this.props.handleButton}
        >
          <i className="iconCard far fa-address-card"></i>
          Crear tarjeta
        </button>
        <p className="js-required"></p>
        <div className="share__box--subsection  js-display">
          <h3 className="titleCard">La tarjeta ha sido creada:</h3>
          <a
            className="linkCard js-card-result"
            href={`${this.props.cardUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            lalalal
            {this.props.cardUrl}
          </a>
          <a className="twitterLink" href="" target="_blank" rel="noreferrer">
            <i className="icon fab fa-twitter"></i>Compartir en twitter
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
