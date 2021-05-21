/**
 * function filters the products array it receives based on two strings it receives,
 * which are nameFilter and categoryFilter and returns the filtered array
 * @type {function}
 * @param {array<object>} products
 * @param {string} categoryFilter
 * @param {string} nameFilter
 * @returns {array<object>}
 */

export function getProductsFilteredByNameandCategory(
  products,
  categoryFilter,
  nameFilter
) {
  return products
    .filter((product) => {
      return product.category === categoryFilter || categoryFilter === "All";
    })
    .filter((product) => {
      if (nameFilter) {
        return product.name.toLowerCase().includes(nameFilter.toLowerCase());
      } else {
        return true;
      }
    });
}
