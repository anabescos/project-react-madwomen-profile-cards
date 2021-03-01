import React, { useState } from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

class GeneratorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInput(inputKey, inputValue) {
    this.setState({ [inputKey]: inputValue });
  }

  handleReset() {
    this.setState({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  }

  render() {
    return (
      <>
        <section className="generator">
          <article className="generator__article">
            <Reset handleReset={this.handleReset} />
            <Card
              palette={this.state.palette}
              name={this.state.name}
              job={this.state.job}
              photo={this.state.photo}
              phone={this.state.phone}
              linkedin={this.state.linkedin}
              github={this.state.github}
              email={this.state.email}
              // data={this.state}
              handleInput={this.handleInput}
            />
          </article>
        </section>
        <Form
          // data={this.state}
          palette={this.state.palette}
          handleInput={this.handleInput}
          name={this.state.name}
          job={this.state.job}
          phone={this.state.phone}
          linkedin={this.state.linkedin}
          github={this.state.github}
          mail={this.state.email}
        />
      </>
    );
  }
}
export default GeneratorCard;
