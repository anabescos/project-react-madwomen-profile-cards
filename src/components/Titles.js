import React from "react";
// import '../stylesheets/layout/_headerCard.scss';

class Titles extends React.Component {
  render() {
    return (
      <legend className={`${this.props.className}__title js-title`}>
        <div className={`${this.props.className}__title--container`}>
          {/* <i className="far fa-keyboard icon" /> */}
          <i className={this.props.icon + " icon"} />
          <h2 className="word">{this.props.name}</h2>
        </div>
        <i className="collapsable__icon fas fa-chevron-up arrow" />
      </legend>
    );
  }
}

export default Titles;
