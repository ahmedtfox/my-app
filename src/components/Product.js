import { Link, useParams } from "react-router-dom";

function Product(props) {
  const { product, showBtn } = props;
  let xx = product.description;
  let desc = "";
  if (xx) {
    desc = `${xx.slice(0, 30)}...`;
  }

  return (
    <>
      <div className="card mb-5">
        <img src={product.image} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-text">${product.price}</h6>
          <p className="card-text">{desc}</p>
          {showBtn ? (
            <Link
              to={`/products/${product.id}`}
              type="Button"
              className="btn btn-primary btn-sm"
            >
              Details
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Product;
