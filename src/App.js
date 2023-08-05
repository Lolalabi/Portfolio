import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto">
      <Header homeRef={homeRef} />
      <Home aboutRef={aboutRef} projectRef={projectRef} ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectRef} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
