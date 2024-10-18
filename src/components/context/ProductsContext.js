import { createContext, useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider(props) {
  const [box, setBox] = useState("ahmed");
  return (
    <ProductsContext.Provider value={box}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
