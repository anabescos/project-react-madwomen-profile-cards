import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/MadWomenLogo_2.svg';
import '../stylesheets/layout/_headerCard.scss';

class HeaderCard extends React.Component {
  render () {
    return (
      <header className="header">
        <Link to='/'>
        
          <img
            className="header__img"
            src={logo}
            title="Go to home page"
            alt="Mad Women"
          />
       </Link>
      </header>
    );
  }
}

export default HeaderCard;
