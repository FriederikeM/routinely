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
