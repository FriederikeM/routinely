/**
 * function receives a product id and an array or products (objects)
 * it then searches for the object inside the array with the received id
 * and returns that product
 * @type {function}
 * @param {number} id - product id
 * @param {array<object>} products - products array
 * @returns {object} - product with the received id
 */

export default function getProductById(id, products) {
  const foundProduct = products.find((product) => {
    return product.id === id;
  });
  return foundProduct;
}
