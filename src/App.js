import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Header/>
      <Services/>
    </div>
  );
}

export default App;
