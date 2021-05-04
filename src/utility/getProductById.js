export default function getProductById(id, products) {
  const foundProduct = products.find((product) => {
    return product.id === id;
  });
  return foundProduct;
}
