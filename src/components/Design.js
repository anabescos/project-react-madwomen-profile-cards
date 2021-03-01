import React from "react";
import Palette from "./Palette";

import "../stylesheets/layout/form/_design.scss";

let isChecked = "checked";
class Design extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3 className="design__palette--colors">Colores</h3>
        <div>
          <Palette
            value="1"
            checked={this.props.state === this.props.value}
            onChange={this.props.getChangeInput}
          />
          <Palette
            value="2"
            checked={this.props.state === this.props.value}
            onChange={this.props.getChangeInput}
          />
          <Palette
            value="3"
            checked={this.props.state === this.props.value}
            onChange={this.props.getChangeInput}
          />
          <Palette
            value="4"
            checked={this.props.state === this.props.value}
            onChange={this.props.getChangeInput}
          />
        </div>
      </>
    );
  }
}
export default Design;
