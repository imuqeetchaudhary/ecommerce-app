import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CarouselCard from "./components/CarouselCard";
import ProductsListing from "./components/ProductsListing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselCard />
      <ProductsListing />
      <Footer />
    </div>
  );
}

export default App;
