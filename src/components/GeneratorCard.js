import React from "react";
// import { sendRequest } from "../services/api";
import HeaderCard from "./HeaderCard";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import api from "../services/Api";
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
      serverData: {},
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  updatePhoto(photo) {
    this.setState({ photo: photo });
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
  };

  handleShare() {
    console.log('Me han clickado');
    const userData = {
          name: this.state.name,
          job: this.state.job,
          phone: this.state.phone,
          email: this.state.email,
          linkedin: this.state.linkedin,
          github: this.state.github,
          palette: parseInt(this.state.palette),
          photo: this.state.photo,
        };
        console.log(userData);
        api(data).then((response) => {
          if (response.success === true) {
            this.setState({serverData: response.cardURL});
          }
        });
  };

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
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      palette: data.palette,
      photo: data.photo,
    });
  }
  // handleShare() {
  //   const data = {
  //     name: this.state.name,
  //     job: this.state.job,
  //     phone: this.state.phone,
  //     email: this.state.email,
  //     linkedin: this.state.linkedin,
  //     github: this.state.github,
  //     palette: this.state.palette,
  //     photo: this.state.photo,
  //   };
  //   console.log("holaaaa", data);
  //   // console.log(this.state.cardUrl);
  //   api(data).then((response) => {
  //     if (response.success === true) {
  //       this.setState({
  //         cardUrl: "www.google.com",
  //       });

  //       console.log("state", this.cardUrl);
  //     } else {
  //       console.log("catakroker");
  //       // apiError: response.error
  //     }
  //   });
  // }

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
            cardURL={this.state.cardURL}
            handleShare={this.handleShare}
          />
        </main>
      </>
    );
  }
}
export default GeneratorCard;
