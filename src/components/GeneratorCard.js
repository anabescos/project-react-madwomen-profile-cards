import React, { useState } from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

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

export default GeneratorCard;
