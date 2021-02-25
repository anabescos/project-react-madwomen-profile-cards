import "../stylesheets/App.scss";
import HeaderCard from "./HeaderCard";
import GeneratorCard from "./GeneratorCard";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <main className="wrapper">
        <GeneratorCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
