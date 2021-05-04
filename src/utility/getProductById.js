export default function getProductById(id, products) {
  const foundProduct = products.filter((product) => {
    return product.id === id;
  });
  return foundProduct[0];
}
