import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.getChangeInput = this.getChangeInput.bind(this);

    // this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  getChangeInput(ev) {
    this.state.props.handleInput(ev.target.name, ev.target.value);
    console.log("palette:", ev.target.name, ev.target.value);
  }
  // onChangeRadio(ev) {
  //   let isChecked;
  //   const checkedRadio = this.props.state;
  //   if (checkedRadio) {
  //     isChecked = "checked";
  //     console.log("me han clicado");
  //   } else {
  //     isChecked = "";
  //   }
  //   console.log(isChecked);
  //   // this.forceUpdate();
  // }

  render() {
    const paletteItems = ["A", "B", "C"];

    const paintList = paletteItems.map((item, index) => {
      return (
        <li
          key={index}
          className={`design__palette${this.props.value}--color` + (index + 1)}
        >
          color{item}
        </li>
      );
    });
    return (
      <label className="design__palette--input" htmlFor="">
        <input
          /*design__palette1 debe ir en el primer input*/
          className="js-palette"
          type="radio"
          name="palette"
          value={this.props.value}
          checked={this.props.state === this.props.value}
          onChange={this.getChangeInput}
        />
        <ul className="design__palette--list ">{paintList}</ul>
        {/*design__palette1 debe ir en el primer ul*/}
      </label>
    );
  }
}
export default Palette;
