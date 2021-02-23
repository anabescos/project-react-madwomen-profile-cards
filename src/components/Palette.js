import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paletteItems = ["A", "B", "C"];

    const paintList = paletteItems.map((item, index) => {
      return (
        <li key={index} className={"design__palette1--color" + (index + 1)}>
          color{item}
        </li>
      );
    });
    return (
      <label className="design__palette--input" htmlFor="">
        {this.props.children}
        <ul className="design__palette--list ">{paintList}</ul>
        {/*design__palette1 debe ir en el primer ul*/}
      </label>
    );
  }
}
export default Palette;
