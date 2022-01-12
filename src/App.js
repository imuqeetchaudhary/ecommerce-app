import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductsListing from "./components/ProductsListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ProductsListing />
    </div>
  );
}

export default App;
