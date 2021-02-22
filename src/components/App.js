import '../stylesheets/App.scss';
import HeaderCard from './HeaderCard';
import GeneratorCard from './GeneratorCard';
import Fieldset from './Fieldset';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';

function App () {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <GeneratorCard />
        <form className="form js-submit" action="create card" method="GET">
          <Fieldset name="Diseña" icon="far fa-object-ungroup" className="design__palette">
            <Design />
          </Fieldset>
          <Fieldset name="Rellena" icon="far fa-keyboard" className="fill__box">
          <Fill />
          </Fieldset>
          <Fieldset name="Comparte" icon="fas fa-share-alt" className="share__box">
          <Share />
          </Fieldset>
        </form>
      </main>
      <Footer />
    
    </div>
  );
}

export default App;
