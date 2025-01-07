import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import World from "./components/World";
import Services from "./components/Services";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroImage />
      <World />
      <Services />
    </main>
  );
}

export default App;
