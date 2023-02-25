import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="bg-neutral-700">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
