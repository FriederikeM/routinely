import { useState, useEffect } from "react";

/**
 * fetches products array from JSON file and updates products useState with the new array
 * @type {function}
 * @returns {array<object>}
 */

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
