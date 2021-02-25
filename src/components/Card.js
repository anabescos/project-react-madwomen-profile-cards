import React from "react";
import IconLinks from "./IconLinks";
import Fill from "./Fill";

class Card extends React.Component {
  constructor(props){
    super(props)
    this.props.handleChange= this.props.handleChange.bind(this.state);
  }

  render() {
    return (
      <div className="generator__article--container js-card">
        <div className="container__nameprofession">
          <h2 className="container__nameprofession--name js-card-name">
            {this.state.name}
          </h2>
          <h3 className="container__nameprofession--profession js-card-job">
          {this.state.job}
          </h3>
        </div>
       
        <div className="js__profile-image container__img"></div>
        <nav className="container__nav">
          <ul className="menu">
            <IconLinks aClassName="phone" iClassName="fas fa-mobile-alt" />
            <IconLinks aClassName="email" iClassName="far fa-envelope" />
            <IconLinks aClassName="linkedin" iClassName="fab fa-linkedin-in" />
            <IconLinks aClassName="github" iClassName="fab fa-github-alt" />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Card;
