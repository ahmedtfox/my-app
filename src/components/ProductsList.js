import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_URL = "http://localhost:3344/products";

  const [data, setData] = useState([]);
  let list = data.map((p, index) => {
    return (
      <div key={p.id} className="col-3">
        <Product product={p} showBtn={true} />
      </div>
    );
  });

  // style="width: 18rem;"

  useEffect(() => {
    fetch(api_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {list.length > 0 ? list : <h2>No Products</h2>}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
