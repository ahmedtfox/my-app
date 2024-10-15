import productData from "./components/productData";
import Product from "./components/Product";
function App() {
  const list = productData.map((p) => {
    return p.price > 50 ? <Product key={p.id} product={p} /> : null;
  });
  return (
    <div className="App">
      <div className="row">{list}</div>
    </div>
  );
}

export default App;
