import React from "react";
// import PropTypes from 'prop-types';
import defaultPhoto from "../images/joan-holloway.jpg";
import "../stylesheets/layout/form/GetPhoto.scss";

class GetPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();

    this.myFileField = React.createRef();

    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      this.fr.addEventListener("load", this.getImage);

      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;

    this.props.updatePhoto(image);
  }

  render() {
    const photo = this.props.photo === "" ? defaultPhoto : this.props.photo;
    return (
      <>
        <div className="fill__box--label imgLabel">Imagen de perfil</div>
        <div className="addImage">
          <label
            type="button"
            htmlFor="photo"
            className="js__profile-trigger fill__box--input buttonImg"
          >
            Añadir imagen
            <input
              className="js__profile-upload-btn buttonInput"
              type="file"
              ref={this.myFileField}
              onChange={this.uploadImage}
              id="photo"
              name="photo"
              required
            />
          </label>
          <div
            className="js__profile-preview preview"
            style={{ backgroundImage: `url(${photo})` }}
          />
        </div>
      </>
    );
  }
}

// GetPhoto.propTypes = {

// };

export default GetPhoto;
