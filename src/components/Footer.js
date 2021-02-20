
import React from 'react';
import logo from '../images/MadWomenLogo_2.svg';
import "../stylesheets/layout/_footer.scss";

class Footer extends React.Component {
  render() {
     return (
           <footer className="footer">
            <small className="footer__small"> Mad Women profile cards </small>
            <a
               className="footer__link"
               itle="Ir a la página de Adalab"
               type="_blank"
               href="https://adalab.es/"
            >
          <img
             className="footer__logo"
             src={logo}
             alt="logo Adalab"
            />
          </a>
         </footer>
        );
    }
}

export default Footer;









