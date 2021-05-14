import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = () => {
      return fetch("/products.json")
        .then((response) => response.json())
        .then((productData) => {
          setProducts(productData);
        });
    };
    fetchProducts();
  }, []);
  return products;
}
