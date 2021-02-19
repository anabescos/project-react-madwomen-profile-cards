import React from 'react';
// import '../stylesheets/layout/_headerCard.scss';

class Titles extends React.Component {
  render () {
    return (
      <legend className="fill__title js-title">
        <div className="fill__title--container">
          {/* <i className="far fa-keyboard icon" /> */}
          <i className="far fa-keyboard icon" />
          <h2 className="word">{this.props.name}</h2>
        </div>
        <i className="collapsable__icon fas fa-chevron-up arrow" />
      </legend>
    );
  }
}

export default Titles;
