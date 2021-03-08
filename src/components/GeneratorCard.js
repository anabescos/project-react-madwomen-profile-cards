import React from "react";
import { sendRequest } from "../services/api";
import HeaderCard from "./HeaderCard";
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
      photo: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  updatePhoto(photo){
    this.setState({photo: photo});
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
      photo: "",
    });
  }

  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.getLocalStorage("data");
    }
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({
      name: data.name,
      job: data.job,
      phone: data.phone,
      mail: data.mail,
      linkedin: data.linkedin,
      github: data.github,
      palette: data.palette,
      photo: data.photo,
    });
  }

  render() {
    return (
      <>
        <HeaderCard />
        <main className="wrapper">
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
                handleInput={this.handleInput}
                updatePhoto={this.updatePhoto}
              />
            </article>
          </section>
          <Form
            palette={this.state.palette}
            name={this.state.name}
            job={this.state.job}
            photo={this.state.photo}
            phone={this.state.phone}
            linkedin={this.state.linkedin}
            github={this.state.github}
            email={this.state.email}
            handleInput={this.handleInput}
            updatePhoto={this.updatePhoto}
          />
        </main>
      </>
    );
  }
}
export default GeneratorCard;
