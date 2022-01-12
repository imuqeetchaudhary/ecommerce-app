import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CarouselCard from "./components/CarouselCard";
import ProductsListing from "./components/ProductsListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselCard />
      <ProductsListing />
    </div>
  );
}

export default App;
