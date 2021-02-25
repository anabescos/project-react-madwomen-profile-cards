import React from "react";
import "../stylesheets/layout/form/_fill.scss";

class Fill extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name : 'Peggy Olson',
      job: 'Copywriter',
      email: 'mailto:#',
      phone: '',
      linkedin: '#',
      github: '#'
    };
   this.handleChange= this.handleChange.bind(this);
  }
  handleChange= (ev)=>{

    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value
    };
    this.setState(newState);

  }
  
  render() {
    return (
      <div className="fill__box collapsable__content">
        <label className="fill__box--label name" htmlFor="Name">
          Nombre Completo
        </label>
        <input
          value ={this.state.name}
          onChange={this.handleChange}
          className="fill__box--input js-input-name js-input-text"
          placeholder="Ej: Sally Jill"
          type="text"
          id="name"
          name="name"
          required
        />
        <label className="fill__box--label" htmlFor="job">
          Puesto
        </label>
        <input
          value ={this.state.job}
          onChange={this.handleChange}
          className="fill__box--input job js-input-job js-input-text"
          placeholder="Ej: Front-end unicorn"
          type="text"
          id="job"
          name="job"
          required
        />
        <label className="fill__box--label imgLabel" htmlFor="photo">
          Imagen de perfil
        </label>
        <div className="addImage">
          <button
            className="js__profile-trigger fill__box--input buttonImg"
            type="button"
          >
            Añadir imagen
          </button>
          <input
            // value ={this.state.name}
            // onChange={this.handleChange}
            className="js__profile-upload-btn buttonInput"
            type="file"
            id="photo"
            name="photo"
            required
          />
          <div className="js__profile-preview preview" />
        </div>
        <label className="fill__box--label" htmlFor="email">
          Email
        </label>
        <input
          value ={this.state.email}
          onChange={this.handleChange}
          className="fill__box--input js-input-email js-input-text"
          placeholder="Ej: sally-hill@gmail.com"
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label className="fill__box--label" htmlFor="phone">
          Teléfono
        </label>
        <input
          value ={this.state.phone}
          onChange={this.handleChange}
          className="fill__box--input js-input-phone js-input-text"
          placeholder="Ej:+34 666666666"
          type="tel"
          id="phone"
          name="phone"
          pattern="^[0-9]{9}$"
          required
        />
        <label className="fill__box--label" htmlFor="linkedin">
          Linkedin
        </label>
        <input
          value ={this.state.linkedin}
          onChange={this.handleChange}
          className="fill__box--input js-input-linkedin js-input-text"
          placeholder="Ej: linkedin.com/in/sally.hill"
          type="text"
          id="linkedin"
          name="linkedin"
        />
        <label className="fill__box--label" htmlFor="github">
          Github
        </label>
        <input
          value ={this.state.github}
          onChange={this.handleChange}
          className="fill__box--input js-input-github js-input-text"
          placeholder="Ej: @sally-hill"
          type="text"
          id="github"
          name="github"
        />
      </div>
    );
  }
}

export default Fill;
