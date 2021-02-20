import '../stylesheets/App.scss';

// import adalabLogo from '../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import GeneratorCard from './GeneratorCard';
import Share from './Share';
import Fill from './Fill';
import Design from './Design';

function App () {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <GeneratorCard />
        <form className="form js-submit" action="create card" method="GET">
          <Design />
          <Fill />
          <Share />
        </form>
      </main>
      {/* <Footer  /> */}
    </div>
  );
}

export default App;
