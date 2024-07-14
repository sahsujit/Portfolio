import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
  <div className="overflow-x-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    <SocialLinks/>

  
  </div>
  );
}

export default App;
