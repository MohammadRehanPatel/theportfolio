import { useState } from "react";
import "./App.css";
import Hero from "./components/main/Hero";
import StarCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Footer from "./components/main/Footer";

function App() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col ">
          <StarCanvas />
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
