import React, { useState } from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

const GeneratorCard = () => {
  const [input, setInput] = useState("");

  const handleInput = (inputKey, inputValue) => {
    setInput({ [inputKey]: inputValue });
  };

  return (
    <>
      <section className="generator">
        <article className="generator__article">
          <Reset />
          <Card />
        </article>
      </section>
      <Form input={input} eventHandler={handleInput} />
    </>
  );
};

export default GeneratorCard;
