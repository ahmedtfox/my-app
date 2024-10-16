import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
function ProductDetails() {
  const prams = useParams();

  const api_URL = "https://fakestoreapi.com/products/" + prams.productId;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <Product product={data} showBtn={false} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetails;
