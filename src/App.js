import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="add-product" element={<AddProduct />}></Route>
        <Route path="products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
