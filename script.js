console.log("Home Repair Log is connected.");

const repairForm = document.querySelector("#repairForm");
const itemNameInput = document.querySelector("#itemName");
const itemStatusSelect = document.querySelector("#itemStatus");
const itemNoteTextarea = document.querySelector("#itemNote");
const itemsList = document.querySelector("#itemsList");

const statusLabels = {
  working: "Working",
  broken: "Broken",
  "needs-part": "Needs part",
  fixed: "Fixed",
};

repairForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = itemNameInput.value;
  const itemStatus = itemStatusSelect.value;
  const itemNote = itemNoteTextarea.value;

  addItemCard(itemName, itemStatus, itemNote);

  repairForm.reset();
});

function addItemCard(name, status, note) {
  const card = document.createElement("article");
  card.classList.add("card");

  const statusElement = document.createElement("p");
  statusElement.classList.add("status", `status--${status}`);
  statusElement.textContent = statusLabels[status];

  const titleElement = document.createElement("h3");
  titleElement.textContent = name;

  const noteElement = document.createElement("p");
  noteElement.textContent = note;

  card.append(statusElement, titleElement, noteElement);
  itemsList.append(card);
}