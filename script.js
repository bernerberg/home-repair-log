console.log("Home Repair Log is connected.");

// Находим важные элементы на странице
const repairForm = document.querySelector("#repairForm");
const itemNameInput = document.querySelector("#itemName");
const itemStatusSelect = document.querySelector("#itemStatus");
const itemNoteTextarea = document.querySelector("#itemNote");
const itemsList = document.querySelector("#itemsList");

// Словарь: техническое значение статуса → красивый текст для пользователя
const statusLabels = {
  working: "Working",
  broken: "Broken",
  "needs-part": "Needs part",
  fixed: "Fixed",
};

const items = [
  {
    name: "Printer",
    status: "broken",
    note: "Does not turn on. Need to check cable, fuse and power supply.",
  },
  {
    name: "MacBook",
    status: "working",
    note: "Battery and screen are fine. Need to clean keyboard and check storage.",
  },
];

renderItems();

// Ждём отправки формы
repairForm.addEventListener("submit", function (event) {
  // Не даём браузеру перезагрузить страницу
  event.preventDefault();

  const newItem = {
    name: itemNameInput.value,
    status: itemStatusSelect.value,
    note: itemNoteTextarea.value,
  };

  items.push(newItem);

  renderItems();

  // Очищаем форму
  repairForm.reset();
});

function renderItems() {
  itemsList.innerHTML = "";

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    addItemCard(item.name, item.status, item.note, index);
  }
}

// Функция, которая создаёт новую карточку
function addItemCard(name, status, note, index) {
  const card = document.createElement("article");
  card.classList.add("card");

  const statusElement = document.createElement("p");
  statusElement.classList.add("status", `status--${status}`);
  statusElement.textContent = statusLabels[status];

  const titleElement = document.createElement("h3");
  titleElement.textContent = name;

  card.append(statusElement, titleElement);

  if (note.trim()) {
    const noteElement = document.createElement("p");
    noteElement.textContent = note;
    card.append(noteElement);
  }

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    deleteItem(index);
  });

  card.append(deleteButton);
  itemsList.append(card);
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}