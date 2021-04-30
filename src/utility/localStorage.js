export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("routine")) || [];

  return data;
}

export function sendDataToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  data.push(items);

  localStorage.setItem("routine", JSON.stringify(data));
}
