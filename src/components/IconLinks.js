import React from "react";

class IconLinks extends React.Component {
  render() {
    // console.log("iconlinks:", this.props);
    return (
      <li className="menu__item">
        <a
          className={`js-card-${this.props.aClassName}`}
          href={this.props.href}
        >
          <i className={`menu__item--icon ${this.props.iClassName}`}></i>
        </a>
      </li>
    );
  }
}

export default IconLinks;
