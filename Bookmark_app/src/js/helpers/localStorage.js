function updateLocalStorage(model) {
  localStorage.setItem("Bookmark List", JSON.stringify(model));
}

function setLocalStorageData(model) {
  const localData = JSON.parse(localStorage.getItem("Bookmark List"));
  if (localData == null) return;
  localData.list.map((bookmark) => model.add(bookmark));
}

module.exports = { updateLocalStorage, setLocalStorageData };
