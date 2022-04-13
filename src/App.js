// Components
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel.js";
import IndicadorGallery from "./components/IndicadorGallery/IndicadorGallery";
import Email from './components/Email/Email';
import Gallery from './components/Gallery/Gallery';
import Instagram from './components/Instagram/Instagram';
import WhatsApp from './components/WhatsApp/WhatsApp';

// CSS
import "./App.css";


function App() {
  return (
    <div className="App-header">
      <Navbar />
      <Carousel />
      <About />
      <IndicadorGallery />
      <Gallery />
      <Email />
      <Instagram />
      <WhatsApp />
    </div >
  );
}

export default App;
