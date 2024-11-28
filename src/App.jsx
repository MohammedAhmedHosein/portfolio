import Header from "./components/1 - header/Header";
import Mainsection from "./components/2 - mainsection/Mainsection";
import Submainsection from "./components/3 - submainsection/Submainsection";
import Contact from "./components/4 - contact/Contact";
import Footer from "./components/5 - footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <Mainsection />
      <div className="divider" />
      <Submainsection />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <button className="scroll2Top icon-keyboard_arrow_up"></button>
    </div>
  );
}

export default App;
