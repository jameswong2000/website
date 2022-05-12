import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Portfolio/>
      <Gallery/>
    </div>
  );
}

export default App;
