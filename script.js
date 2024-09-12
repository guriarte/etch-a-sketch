const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridContainer.appendChild(gridItem);
}

document.querySelectorAll(".grid-item").forEach((gridItem) => {
  gridItem.addEventListener("mouseover", (e) => {
    e.currentTarget.style.backgroundColor = "black";
  });
});
