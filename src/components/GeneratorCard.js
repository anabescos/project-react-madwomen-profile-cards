import React, { useState } from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

<<<<<<< HEAD
class GeneratorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {    
    name: '',
    job: '',
    email: '',
    phone: '',  
    linkedin:'',
    github: '',
  } 
  this.handleInput=this.handleInput.bind(this);
  }
=======
const GeneratorCard = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState('');

  const handleInput = (inputKey, inputValue) => {
    setInput({ [inputKey]: inputValue });
  };

  const handleReset = () => {

    console.log ("Me han clickao");
    setState({
      name: '',
      job: '',
    })
  }

  return (
    <>
      <section className="generator">
        <article className="generator__article">
          <Reset handleReset={handleReset} state={state}/>
          <Card input={input} />
        </article>
      </section>
      <Form input={input} eventHandler={handleInput} />
    </>
  );
};
>>>>>>> 89144bd1627398d567767278e12336cc40ab1afb

  
     handleInput = (inputKey, inputValue) => {
     this.setInput({ [inputKey]: inputValue });
    }
  render(){   
    return (
      <>
        <section className="generator">
          <article className="generator__article">
            <Reset />
            <Card data={this.state}   handleInput={this.handleInput} />
          </article>
        </section>
        <Form data={this.state}   handleInput={this.handleInput} />
      </>
    );
  }
 
}
export default GeneratorCard;
