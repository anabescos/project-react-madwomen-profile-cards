import React, { useState } from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

class GeneratorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleReset(){
    this.setState ({
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  }

  

  render() {
    return (
      <>
        <section className="generator">
          <article className="generator__article">
            <Reset handleReset={this.handleReset}/>
            <Card data={this.state} handleInput={this.handleInput} />
          </article>
        </section>
        <Form data={this.state} handleInput={this.handleInput} />
      </>
    );
  }
}
export default GeneratorCard;
