import React from 'react';
// import PropTypes from 'prop-types';
import defaultPhoto from '../images/peggy-olson.jpg';
import '../stylesheets/layout/form/GetPhoto.scss';

class GetPhoto extends React.Component {
  constructor (props) {
    super (props);
    this.fr = new FileReader ();

    this.myFileField = React.createRef ();

    this.uploadImage = this.uploadImage.bind (this);
    this.getImage = this.getImage.bind (this);
  }

  uploadImage (ev) {
    console.log ('La usuaria ha abierto la ventana para elegir ficheros');

    console.log ('La usuaria ha elegido los ficheros', ev.currentTarget.files);

    console.log (
      'El primero de los ficheros elegidos es',
      ev.currentTarget.files[0]
    );

    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      this.fr.addEventListener ('load', this.getImage);

      this.fr.readAsDataURL (myFile);
    }
  }

  getImage () {
    console.log ('Información útil sobre el fichero cargado', this.fr);

    const photo = this.fr.result;

    this.props.updatePhoto(photo);
  }

  render () {
    const photo = this.props.photo === '' ? defaultPhoto : this.props.photo;
    return (
      <div className="addImage">

        <label className="fill__box--label imgLabel" htmlFor="photo">
          Imagen de perfil
        </label>
        <button
          className="js__profile-trigger fill__box--input buttonImg"
          type="button"
        >
          Añadir imagen
        </button>
        <input
          className="js__profile-upload-btn buttonInput"
          type="file"
          ref={this.myFileField}
          onChange={this.uploadImage}
          id="photo"
          name="photo"
          required
        />
        <div
          className="js__profile-preview preview"
          style={{ backgroundImage: `url(${photo})` }}
        />
      </div>
    );
  }
}

// GetPhoto.propTypes = {

// };

export default GetPhoto;
