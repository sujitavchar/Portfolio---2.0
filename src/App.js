import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import './App.css';


function App() {
  return (
    <div className="App">
     <div className="navbar-section">
     <Navbar />
     </div>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />  
      <Footer />
    </div>
  );
}

export default App;
