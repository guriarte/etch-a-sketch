const gridContainer = document.querySelector(".grid-container");
const gridItem = document.createElement("div");
gridItem.className = "grid-item";

for (let i = 0; i < 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridContainer.appendChild(gridItem);
}
