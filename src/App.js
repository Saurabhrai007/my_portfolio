import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
