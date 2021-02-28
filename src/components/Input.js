import React from "react";
class Input extends React.Component {
  render() {
    return (
      <>
        <label className="fill__box--label name" htmlFor={this.props.htmlFor}>
          {this.props.setName}
        </label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          className="fill__box--input js-input-name js-input-text"
          placeholder={this.props.placeholder}
          type="text"
          id={this.props.id}
          name={this.props.name}
          required //mirar a ver cómo se hacía esto :)
        />
      </>
    );
  }
}
export default Input;
