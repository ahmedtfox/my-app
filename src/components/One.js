import productData from "./productData";
import Product from "./Product";
import "./Product.css";
import { useEffect, useState } from "react";

function One() {
  let [data, setData] = useState([]);

  const products = data.map((p) => {
    return p.price > 50 ? <Product key={p.id} product={p} /> : null;
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="row">{products}</div>;
}

export default One;
