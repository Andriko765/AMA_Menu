import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = React.createContext();

export const DataCollection = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://amaapi.up.railway.app/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
