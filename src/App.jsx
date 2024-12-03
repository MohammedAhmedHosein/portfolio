import Header from "./components/1 - header/Header";
import Mainsection from "./components/2 - mainsection/Mainsection";
import Submainsection from "./components/3 - submainsection/Submainsection";
import Contact from "./components/4 - contact/Contact";
import Footer from "./components/5 - footer/Footer";

function App() {
  return (
    <div id="up" className="container">
      <Header />

      <section id="about">
        <Mainsection />
      </section>

      <div className="divider" />

      {/* <section id="about">
        <Mainsection />
      </section>


      <div className="divider" /> */}

      <section id="articles">
        <Submainsection />
      </section>

      <div className="divider" />

      <section id="contact">
        <Contact />
      </section>
      <div className="divider" />

      <Footer />

      <a href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
