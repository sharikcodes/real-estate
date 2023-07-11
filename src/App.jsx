import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css'
import Campanies from "./Components/Companies/Campanies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import Getstarted from "./Components/Getstarted/Getstarted";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Campanies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
