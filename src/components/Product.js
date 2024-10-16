import "./Product.css";

function Product(props) {
  const p = props.product;
  return (
    <div className="card">
      <h3>{p.title}</h3>
      <img src={p.image} alt="d"></img>
      <h4>{p.category}</h4>
      <h3>{p.price}</h3>
      <p>{p.description}</p>
    </div>
  );
}

export default Product;
