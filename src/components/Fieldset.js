import React from "react";
import Titles from "./Titles";

class Fieldset extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("Me han clickado");
  }
  render() {
    const openClassName = this.state.isOpen
      ? "collapsable__open"
      : "collapsable__close";
    return (
      <fieldset
        className={`js-container ${openClassName} ${this.props.className}`}
        onClick={this.handleClick}
      >
        <Titles
          className={this.props.className}
          name={this.props.name}
          icon={this.props.icon}
        />
        <div className={"collapsable__content "}>{this.props.children}</div>
      </fieldset>
    );
  }
}

export default Fieldset;
