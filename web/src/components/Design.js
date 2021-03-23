import React from "react";
import Palette from "./Palette";

import "../stylesheets/layout/form/_design.scss";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.getChangeInput = this.getChangeInput.bind(this);
  }

  getChangeInput(ev) {
    this.props.handleInput(ev.target.name, ev.target.value);
  }

  render() {
    return (
      <>
        <h3 className="design__palette--colors">Colores</h3>
        <div>
          <Palette
            value="1"
            checked={this.props.palette}
            handleInput={this.getChangeInput}
          />
          <Palette
            value="2"
            checked={this.props.palette}
            handleInput={this.getChangeInput}
          />
          <Palette
            value="3"
            checked={this.props.palette}
            handleInput={this.getChangeInput}
          />
          <Palette
            value="4"
            checked={this.props.palette}
            handleInput={this.getChangeInput}
          />
        </div>
      </>
    );
  }
}
export default Design;
