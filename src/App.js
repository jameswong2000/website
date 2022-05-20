import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Portfolio/>
      <Gallery/>
      <AboutMe/>
    </div>
  );
}

export default App;
