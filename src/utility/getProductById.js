export default function getProductById(id, products) {
  if (id) {
    const foundProduct = products.find((product) => {
      return product.id === id;
    });
    return foundProduct;
  }
}
