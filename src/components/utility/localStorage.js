export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("productData")) || [];

  return data;
}

export function sendDataToLocalStorage(id, items) {
  const data = getDataFromLocalStorage();

  data.push(items);

  localStorage.setItem(id, JSON.stringify(data));
}
