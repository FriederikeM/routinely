export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("routine")) || [];

  return data;
}

export function sendDataToLocalStorage(items, isNewItem) {
  const data = getDataFromLocalStorage();

  if (isNewItem) {
    data.push(items);
    localStorage.setItem("routine", JSON.stringify(data));
  } else {
    const index = data.findIndex((routine) => routine.id === items.id);
    const newData = [...data.slice(0, index), items, ...data.slice(index + 1)];

    localStorage.setItem("routine", JSON.stringify(newData));
  }
}
