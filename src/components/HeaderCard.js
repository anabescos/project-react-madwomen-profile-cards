import React from 'react';
import logo from '../images/MadWomenLogo_2.svg';
import "../stylesheets/layout/_headerCard.scss";

class HeaderCard extends React.Component {
  render() {
    return (
        <header className="header">
        <a href="./index.html">
          <img
            className="header__img"
            src={logo}
            title="Go to home page"
            alt="Mad Women"
          />
        </a>
      </header>
    );
  }
}

export default HeaderCard;








