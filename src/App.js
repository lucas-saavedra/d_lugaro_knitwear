import Email from './components/Email/Email';
import Gallery from './components/Gallery/Gallery';
import Instagram from './components/Instagram/Instagram';
import WhatsApp from './components/WhatsApp/WhatsApp';
import './app.css';

function App() {

  return (
    <div className="App-header">
      <Gallery />
      <Email />
      <Instagram />
      <WhatsApp />
    </div >
  );
}

export default App;
