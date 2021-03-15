import React from "react";

class IconLinks extends React.Component {
  render() {
    return (
      <li className="menu__item">
        <a
          className={`js-card-${this.props.aClassName}`}
          href={this.props.href}
          target="_blank"
          rel="noreferrer"
        >
          <i className={`menu__item--icon ${this.props.iClassName}`}></i>
        </a>
      </li>
    );
  }
}

export default IconLinks;
