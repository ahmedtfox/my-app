import productData from "./components/productData";
import Product from "./components/Product";
import Count from "./components/Count";
function App() {
  const list = productData.map((p) => {
    return p.price > 50 ? <Product key={p.id} product={p} /> : null;
  });
  return (
    <div className="App">
      <Count />
    </div>
  );
}

export default App;
