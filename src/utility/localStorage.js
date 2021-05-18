export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("routine")) || [];

  return data;
}

export function sendDataToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  data.push(items);
  localStorage.setItem("routine", JSON.stringify(data));
}

export function editDataInLocalStorage(items) {
  const data = getDataFromLocalStorage();

  const index = data.findIndex((routine) => routine.id === items.id);
  const newData = [...data.slice(0, index), items, ...data.slice(index + 1)];

  localStorage.setItem("routine", JSON.stringify(newData));
}

export default function removeProductFromLocalStorage(product) {
  const data = getDataFromLocalStorage();

  const newProducts = data.filter((newProduct) => {
    return newProduct.id !== product.id;
  });

  localStorage.setItem("routine", JSON.stringify(newProducts));
}
