import React from "react";
import Palettes from "./Palettes";

import "../stylesheets/layout/form/_design.scss";

let isChecked = "checked";
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  onChangeRadio(ev) {
    const checkedRadio = ev.target.value;
    if (checkedRadio) {
      isChecked = "checked";
      console.log("me han clicado");
    } else {
      isChecked = "";
    }
    // this.forceUpdate();
  }

  render() {
    return (
      <>
        <h3 className="design__palette--colors">Colores</h3>
        <div>
          <Palettes value="1" />
          <Palettes value="2" />
          <Palettes value="3" />
          <Palettes value="4" />
        </div>
      </>
    );
  }
}
export default Design;
