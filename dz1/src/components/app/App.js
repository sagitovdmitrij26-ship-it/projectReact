import Header from "../header/Header";
import Section from "../section/Section";
import Aside from "../aside/Aside";
import Footer from "../footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
