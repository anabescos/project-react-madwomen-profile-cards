import React from "react";
import Input from "./Input";
import "../stylesheets/layout/form/_fill.scss";
import GetPhoto from "./GetPhoto";

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.getChangeInput = this.getChangeInput.bind(this);
  }

  getChangeInput(ev) {
    this.props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
    // console.log("fill:", ev.currentTarget.name, ev.currentTarget.value);
  }
  render() {
    return (
      <div className="fill__box collapsable__content">
        <Input
          value={this.props.name}
          htmlFor="Name"
          setName="Nombre Completo"
          onChange={this.getChangeInput}
          className="name"
          placeholder="Ej: Peggy Olson"
          type="text"
          id="name"
          name="name"
          required
        />
        <Input
          value={this.props.job}
          htmlFor="job"
          setName="Puesto"
          onChange={this.getChangeInput}
          className="job"
          placeholder="Ej: Copywriter"
          type="text"
          id="job"
          name="job"
          required
        />
        <GetPhoto
          photo={this.props.photo}
          updatePhoto={this.props.updatePhoto}
        />

        <Input
          value={this.props.email}
          htmlFor="email"
          setName="Email"
          onChange={this.getChangeInput}
          className="email"
          placeholder="Ej: peggy-olson@gmail.com"
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <Input
          value={this.props.phone}
          htmlFor="phone"
          setName="Teléfono"
          onChange={this.getChangeInput}
          className="phone"
          placeholder="Ej:+34 666666666"
          type="tel"
          id="phone"
          name="phone"
          pattern="^[0-9]{9}$"
          required
        />
        <Input
          value={this.props.linkedin}
          htmlFor="linkedin"
          setName="Linkedin"
          onChange={this.getChangeInput}
          className="linkedin"
          placeholder="Ej: peggy.olson"
          type="text"
          id="linkedin"
          name="linkedin"
        />
        <Input
          value={this.props.github}
          htmlFor="github"
          setName="Github"
          onChange={this.getChangeInput}
          className="github"
          placeholder="Ej: @peggy-olson"
          type="text"
          id="github"
          name="github"
        />
      </div>
    );
  }
}

export default Fill;
