import { useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";

function About(props) {
  const box = useContext(ProductsContext);
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <h3>ddd</h3>
        <p>{box}</p>
      </div>
    </>
  );
}

export default About;
