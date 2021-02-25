import Fieldset from "./Fieldset";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(props) {
  return (
    <form className="form js-submit" action="create card" method="GET">
      <Fieldset name="Diseña" icon="far fa-object-ungroup" className="design">
        <Design />
      </Fieldset>
      <Fieldset name="Rellena" icon="far fa-keyboard" className="fill">
        <Fill />
      </Fieldset>
      <Fieldset name="Comparte" icon="fas fa-share-alt" className="share">
        <Share />
      </Fieldset>
    </form>
  );
}

export default Form;
