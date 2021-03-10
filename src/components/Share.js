import React from "react";
import "../stylesheets/layout/form/_share.scss";
import api from "../services/api";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }
  setData(props) {
    const userData = props.children.props.data;

    handleButton(ev) {
      ev.preventDefault();
      senddatatoapi(userData).then((data) => {
        const dataError = data.error;
        const dataSuccess = data.success;
        console.log(data);
        setCardCreated(dataError);
      });
    };
  }
  render() {
    return (
      <div className="share__box collapsable__content collapsable__open">
        <button
          className="share__box--button js-create-btn"
          type="submit"
          title="Create card"
          onClick={this.props.handleInput}
        >
          <i className="iconCard far fa-address-card"></i>
          Crear tarjeta
        </button>
        <p className="js-required"></p>
        <div className="share__box--subsection js-hidden js-display">
          <h3 className="titleCard">La tarjeta ha sido creada:</h3>
          <a className="linkCard js-card-result" href="" target="_blank">
            link awesome profile card
          </a>
          <a className="twitterLink" href="" target="_blank">
            <i className="icon fab fa-twitter"></i>Compartir en twitter
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
