import productData from "./components/productData";
import Product from "./Product";
import "./Product.css";

function ProductList() {
  const list = productData.map((p) => {
    return p.price > 50 ? <Product key={p.id} product={p} /> : null;
  });

  return <div>{list}</div>;
}

export default ProductList;
