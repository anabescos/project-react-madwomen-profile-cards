import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="generator__article--container js-card">
        <div className="container__nameprofession">
          <h2 className="container__nameprofession--name js-card-name">
            Nombre apellido
          </h2>
          <h3 className="container__nameprofession--profession js-card-job">
            Profesión
          </h3>
        </div>
        <div className="js__profile-image container__img"></div>
        <nav className="container__nav">
          <ul className="menu">
            <li className="menu__item">
              <a className="js-card-phone" href="">
                <i className="menu__item--icon fas fa-mobile-alt"></i>
              </a>
            </li>
            <li className="menu__item">
              <a className="js-card-email" href="">
                <i className="menu__item--icon far fa-envelope"></i>
              </a>
            </li>
            <li className="menu__item">
              <a className="js-card-linkedin" href="" target="_blank">
                <i className="menu__item--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="menu__item">
              <a className="js-card-github" href="" target="_blank">
                <i className="menu__item--icon fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Card;
