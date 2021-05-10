export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("routine")) || [];

  return data;
}

export function sendDataToLocalStorage(items) {
  const data = getDataFromLocalStorage();

  const index = data.findIndex((routine) => routine.id === items.id);
  const newData = [...data.slice(0, index), items, ...data.slice(index + 1)];

  localStorage.setItem("routine", JSON.stringify(newData));
}
