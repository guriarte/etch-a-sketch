const newGridButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grid-container");
let numberOfRowsAndColumns = 16;

generateGrid();

document.querySelectorAll(".grid-item").forEach((gridItem) => {
  gridItem.addEventListener("mouseover", (e) => {
    e.currentTarget.style.backgroundColor = "black";
  });
});

newGridButton.addEventListener("click", () => {
  numberOfRowsAndColumns = getRowsAndColumnsFromUser();
});

function generateGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);
  }
}

function getRowsAndColumnsFromUser() {
  let response;

  do {
    response = prompt("How many rows and columns do you want? (max 100)");
    if (response < 0 || response > 100) {
      alert("Please select a number between 0 and 100. Try again.");
    }
  } while (response < 0 || response > 100);

  return response;
}
