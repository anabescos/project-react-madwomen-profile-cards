import React from "react";

class IconLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="menu__item">
        <a className={`js-card-${this.props.aClassName}`} href="">
          <i className={`menu__item--icon ${this.props.iClassName}`}></i>
        </a>
      </li>
    );
  }
}

export default IconLinks;
