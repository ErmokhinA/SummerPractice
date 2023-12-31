import { AboutMe } from "./components/AboutMe";
import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import "./css/App.css";

function App() {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <nav className="header-nav">
            <Header />
          </nav>
          <Home />
        </div>
      </header>

      <AboutMe />

      <Skills />

      <Portfolio />

      <Contacts />
    </>
  );
}

export default App;
