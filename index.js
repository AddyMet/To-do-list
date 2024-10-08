console.log('My code is running');

const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

itemForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh

  const newItemText = itemInput.value;
  if (newItemText.trim() !== "") { // Check for empty input
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;
    itemList.appendChild(newItem);
    itemInput.value = ""; // Clear input field
  }
});