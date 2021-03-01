import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

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
          checked={this.props.checked === this.props.value}
          onChange={this.props.handleInput}
        />
        <ul className="design__palette--list ">{paintList}</ul>
        {/*design__palette1 debe ir en el primer ul*/}
      </label>
    );
  }
}
export default Palette;
