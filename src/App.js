
import './App.css';
import Header from "./components/Header";
import background from "./assert/background.png";
import Hero from"./components/Hero";
import About from"./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
  className="min-h-screen w-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${background})` }}
>
  <Header />
  <Hero />
  <About/>
  <Skills/>
  <Projects/>
  <Resume/>
  <Contact/>
  <Footer/>
</div>

  )
}


