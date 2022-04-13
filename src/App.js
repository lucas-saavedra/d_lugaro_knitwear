// CSS
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel.js";
import IndicadorGallery from "./components/IndicadorGallery/IndicadorGallery";

function App() {
  return (
    <div className="App-header">
      <Navbar />
      <Carousel />
      <About />
      <IndicadorGallery />
    </div>
  );
}

export default App;
