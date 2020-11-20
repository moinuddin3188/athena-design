import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Pricing/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
