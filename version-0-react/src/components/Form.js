import Fieldset from "./Fieldset";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(props) {
  // console.log(props.cardUrl);
  return (
    <form className="form js-submit" action="create card" method="GET">
      <Fieldset name="Diseña" icon="far fa-object-ungroup" className="design">
        <Design palette={props.palette} handleInput={props.handleInput} />
      </Fieldset>
      <Fieldset name="Rellena" icon="far fa-keyboard" className="fill">
        <Fill
          name={props.name}
          job={props.job}
          phone={props.phone}
          photo={props.photo}
          linkedin={props.linkedin}
          github={props.github}
          email={props.email}
          handleInput={props.handleInput}
          updatePhoto={props.updatePhoto}
        />
      </Fieldset>
      <Fieldset name="Comparte" icon="fas fa-share-alt" className="share">
        <Share
          name={props.name}
          job={props.job}
          phone={props.phone}
          photo={props.photo}
          linkedin={props.linkedin}
          github={props.github}
          email={props.email}
          handleShare={props.handleShare}
          serverData={props.serverData}
          hiddenClass={props.hiddenClass}
        />
      </Fieldset>
    </form>
  );
}

export default Form;
