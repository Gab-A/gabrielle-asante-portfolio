import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="flex flex-col  px-6 space-y-6 md:space-y-10 md:px-14 lg:px-20 lg:space-y-20 mt-10 lg:mt-20 xl:px-40">
          <About />
          <Skills />
          <Projects />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
