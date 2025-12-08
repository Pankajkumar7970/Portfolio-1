import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import InteractiveSimulation from "./components/InteractiveSimulation";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <InteractiveSimulation />
        <Timeline />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default App;
