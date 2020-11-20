import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Pricing from './components/Pricing/Pricing';
import Subscribe from './components/Subscribe/Subscribe';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Pricing/>
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default App;
