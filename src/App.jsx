import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import World from "./components/World";
import Services from "./components/Services"
import Innovation from "./components/Innovation";
import Empower from "./components/Empower";
import ShowCase from "./components/ShowCase";
import Production from "./components/Production";
import Advocacy from "./components/Advocacy";
import Customers from "./components/Customers";
  import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroImage />
      <World />
      <Services />
      <Innovation />
      <Empower />
      <ShowCase />
      <Production />
      <Advocacy />
      <Customers />
      <Contact />
    </main>
  );
}

export default App;
