import React from "react";

class Reset extends React.Component {
  render() {
    return (
      <button className="generator__article--button1 js-reset" onClick={this.props.handleReset}>
        <i className="far fa-trash-alt"></i>
        <span>Reset</span>
      </button>
    );
  }
}

export default Reset;
