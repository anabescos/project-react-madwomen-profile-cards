import React from "react";
import Palette from "./Palette";

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
    } else {
      isChecked = "";
    }
    console.log(isChecked);
    this.forceUpdate();
  }

  render() {
    return (
      <> 
          <h3 className="design__palette--colors">Colores</h3>
          <div>
            <Palette>
              <input
                className="js-palette design__palette1"
                type="radio"
                name="palette"
                value="1"
                checked={isChecked}
                onChange={this.onChangeRadio}
              />
            </Palette>
            <Palette>
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="2"
                checked={isChecked}
                onChange={this.onChangeRadio}
              />
            </Palette>
            <Palette>
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="3"
                checked={isChecked}
                onChange={this.onChangeRadio}
              />
            </Palette>
            <Palette>
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="4"
                checked={isChecked}
                onChange={this.onChangeRadio}
              />
            </Palette>
          </div>
        
      </>
    );
  }
}
export default Design;
