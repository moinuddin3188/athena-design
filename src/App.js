import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './components/Pricing/Pricing';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Pricing/>
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default App;
