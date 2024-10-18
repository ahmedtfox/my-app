import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import ProductsProvider from "./components/context/ProductsContext";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <ProductsProvider>
            <About/>
          </ProductsProvider>
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
