import React from "react";
import PropTypes from "prop-types";
import defaultPhoto from "../images/joan-holloway.jpg";
import "../stylesheets/layout/form/Profile.scss";

class Profile extends React.Component {
  render() {
    const photo = this.props.photo === "" ? defaultPhoto : this.props.photo;
    return (
      <div
        className="js__profile-image container__img"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
    );
  }
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Profile;
