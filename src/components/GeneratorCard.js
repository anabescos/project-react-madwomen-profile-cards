import React from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";

class GeneratorCard extends React.Component {
  render() {
    return (
      <>
        <section className="generator">
          <article className="generator__article">
            <Reset />
            <Card />
          </article>
        </section>
        <Form />
      </>
    );
  }
}

export default GeneratorCard;
