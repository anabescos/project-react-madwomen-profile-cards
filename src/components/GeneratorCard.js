import React, {useState} from "react";
import Reset from "./Reset";
import Card from "./Card";
import Form from "./Form";
import "../stylesheets/layout/_generatorCard.scss";


function  GeneratorCard () {
//lo que quiero escribir
  const [name, setState ] = useState ('hola');
  const [job, setJob] = useState ('');


  // const setState = 
  

  const handleText = (ev)=> {
    const key = ev.currentTarget.name;
    const newState = {
      [key]: ev.currentTarget.value
    };
    if (key === "name") {
      setState(newState);
    } else if (key === "job") {
      setJob(newState);
    } 
    
  }
    
   
  


  
    return (
      <>
        <section className="generator">
          <article className="generator__article">
            <Reset />
            <Card name ={name} job ={job} onChange = {handleText} />
          </article>
        </section>
        <Form name ={name} job ={job} onChange = {handleText} />
      </>
    );
  

}

export default GeneratorCard;
