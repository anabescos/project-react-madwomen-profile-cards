import React from 'react';
import Titles from './Titles';
import '../stylesheets/layout/form/_design.scss';

class Design extends React.Component {
  render() {
    return (
      <fieldset className="design js-container collapsable__close">
        <Titles name="Diseña" />
        <div className="design__palette collapsable__content">
          <h3 className="design__palette--colors">Colores</h3>
          <div>
            <label className="design__palette--input" for="">
              <input
                className="design__palette1 js-palette"
                type="radio"
                name="palette"
                value="1"
                checked
              />
              <ul className="design__palette--list design__palette1">
                <li className="design__palette1--color1">colorA</li>
                <li className="design__palette1--color2">colorB</li>
                <li className="design__palette1--color3">colorC</li>
              </ul>
            </label>
            <label className="design__palette--input" for="">
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="2"
              />
              <ul className="design__palette--list">
                <li className="design__palette2--color1">colorA</li>
                <li className="design__palette2--color2">colorB</li>
                <li className="design__palette2--color3">colorC</li>
              </ul>
            </label>
            <label className="design__palette--input" for="">
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="3"
              />
              <ul className="design__palette--list">
                <li className="design__palette3--color1">colorA</li>
                <li className="design__palette3--color2">colorB</li>
                <li className="design__palette3--color3">colorC</li>
              </ul>
            </label>
            <label className="design__palette--input" for="">
              <input
                className="js-palette"
                type="radio"
                name="palette"
                value="4"
              />
              <ul className="design__palette--list">
                <li className="design__palette4--color1">colorA</li>
                <li className="design__palette4--color2">colorB</li>
                <li className="design__palette4--color3">colorC</li>
              </ul>
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Design;
