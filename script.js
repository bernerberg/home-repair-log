console.log("Home Repair Log is connected.");

const repairForm = document.querySelector("#repairForm");
const itemNameInput = document.querySelector("#itemName");
const itemStatusSelect = document.querySelector("#itemStatus");
const itemNoteTextarea = document.querySelector("#itemNote");

repairForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = itemNameInput.value;
  const itemStatus = itemStatusSelect.value;
  const itemNote = itemNoteTextarea.value;

  console.log("New item submitted:");
  console.log("Name:", itemName);
  console.log("Status:", itemStatus);
  console.log("Note:", itemNote);
});