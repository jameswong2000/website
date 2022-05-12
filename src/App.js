import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Portfolio/>
    </div>
  );
}

export default App;
