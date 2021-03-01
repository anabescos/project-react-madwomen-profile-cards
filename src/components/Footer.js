
import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/MadWomenLogo_2.svg';
import "../stylesheets/layout/_footer.scss";

class Footer extends React.Component {
  render() {
     return (
           <footer className="footer">
            <small className="footer__small"> Mad Women profile cards </small>
            <Link to='/'>
        
          <img
            className="footer__logo"
            src={logo}
            title="Go to home page"
            alt="Mad Women"
          />
       </Link>
         </footer>
        );
    }
}

export default Footer;









