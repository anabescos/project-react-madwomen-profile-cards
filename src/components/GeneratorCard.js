import React from "react";
import HeaderCard from "./HeaderCard";
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

  handleReset() {
    this.setState({
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
      <HeaderCard />
        <section className="generator">
          <article className="generator__article">
            <Reset handleReset={this.handleReset} />
            <Card
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
          handleInput={this.handleInput}
          name={this.state.name}
          job={this.state.job}
          phone={this.state.phone}
          linkedin={this.state.linkedin}
          github={this.state.github}
          mail={this.state.mail}
        />
      </>
    );
  }
}
export default GeneratorCard;
