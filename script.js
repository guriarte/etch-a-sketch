const newGridButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grid-container");
let numberOfRowsAndColumns = 4;

generateGrid(numberOfRowsAndColumns);

newGridButton.addEventListener("click", () => {
  numberOfRowsAndColumns = getRowsAndColumnsFromUser();
  document.querySelectorAll(".grid-item").forEach((gridItem) => {
    gridItem.remove();
  });
  generateGrid(numberOfRowsAndColumns);
});

function generateGrid(numberOfRowsAndColumns) {
  for (let i = 0; i < numberOfRowsAndColumns * numberOfRowsAndColumns; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.flexBasis = `calc(100% / ${numberOfRowsAndColumns})`;
    gridContainer.appendChild(gridItem);
  }

  document.querySelectorAll(".grid-item").forEach((gridItem) => {
    gridItem.addEventListener("mouseover", (e) => {
      e.currentTarget.style.backgroundColor = getRandomColor();
    });
  });
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

function getRandomColor() {
  let randomHexColor = "#";
  for (let i = 0; i < 6; i++) {
    randomHexColor = randomHexColor.concat(getRandomHexCharacter());
  }

  return randomHexColor;
}

function getRandomHexCharacter() {
  const characters = "ABCDEF0123456789";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}
