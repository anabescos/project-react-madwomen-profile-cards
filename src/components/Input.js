import React from "react";
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
      }
      handleInput(ev) {
        this.props.handleInput({
          inputName: ev.currentTarget.name,
          inputValue: ev.currentTarget.value,
        });
      }
    render(){
     return (
        <>
          <label className="fill__box--label name" htmlFor="Name">
          Nombre Completo
          </label>
          <input
          value={this.props.name}
          onChange={this.handleInput}
          className="fill__box--input js-input-name js-input-text"
          placeholder="Ej: Sally Jill"
          type="text"
          id="name"
          name="name"
          required
          />
        < />
     )



    }
}
export default Input;