import React from "react";
import Profile from "./Profile";
import IconLinks from "./IconLinks";

class Card extends React.Component {
  render() {
    return (
      <div
        className={`generator__article--container palette-${this.props.palette}`}
      >
        <div className="container__nameprofession">
          <h2 className="container__nameprofession--name js-card-name">
            {this.props.name || "Joan Holloway"}
          </h2>
          <h3 className="container__nameprofession--profession js-card-job">
            {this.props.job || "Office manager"}
          </h3>
        </div>

        <Profile photo={this.props.photo} />

        <nav className="container__nav">
          <ul className="menu">
            <IconLinks
              href={this.props.phone ? `tel:${this.props.phone}` : "tel:"}
              aClassName="phone"
              iClassName="fas fa-mobile-alt"
            />
            <IconLinks
              href={this.props.email ? `mailto:${this.props.email}` : "#"}
              aClassName="email"
              iClassName="far fa-envelope"
            />
            <IconLinks
              href={
                this.props.linkedin.includes("https://www.linkedin.com/")
                  ? `${this.props.linkedin}`
                  : this.props.linkedin
                  ? `https://www.linkedin.com/in/${this.props.linkedin}`
                  : `https://www.linkedin.com`
              }
              aClassName="linkedin"
              iClassName="fab fa-linkedin-in"
            />
            <IconLinks
              href={
                this.props.github.includes("https://github.com/")
                  ? `${this.props.github}`
                  : `https://github.com/${this.props.github}`
              }
              aClassName="github"
              iClassName="fab fa-github-alt"
            />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Card;
