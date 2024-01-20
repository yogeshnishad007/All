
import './App.css';
import Button from './Component/Button/Button';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Products from './Component/Products/Products';

function App() {
  return (
    <div className="App">


      <Navbar />
      <Home />
      <Button name={"Get Started"} />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
